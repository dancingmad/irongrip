package com.irongrp.mnemotica.service.training;

import com.irongrp.mnemotica.service.exception.ResourceMissingException;
import com.irongrp.mnemotica.service.training.model.*;
import com.irongrp.mnemotica.service.translation.TranslationService;
import com.irongrp.mnemotica.service.translation.model.Translation;
import com.irongrp.mnemotica.service.user.model.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class TranslationStatisticsService {

    private static final Logger LOGGER = LoggerFactory.getLogger(TranslationStatisticsService.class);

    @Autowired
    private TranslationStatisticsRepository statisticsRepository;

    @Autowired
    private TranslationService translationService;

    public TranslationStatistics getStatistics(User user, Long translationId) {
        return statisticsRepository.findByUserAndTranslation(user.getId(), translationId);
    }

    public List<TranslationStatistics> fetchNextTranslationStatistics(Training training, int limit) {
        TrainingConfiguration configuration = training.getConfiguration();
        List<TranslationStatistics> translations;
        if (configuration.isIterationMode()) {
            // for iteration mode fetch next translations based on iterationlimit  ordered by last run
            translations = fetchNextIteration(training, limit);
        } else {
            // skill mode, fetch translations
            translations = fetchNextSkill(training, limit);
        }
        return translations;
    }

    private List<TranslationStatistics> fetchNextSkill(Training training, int limit) {
        List<TranslationStatistics> translationStatistics = statisticsRepository
                .findNextTranslationsForSkill(training.getId());
        if (translationStatistics == null) {
            return Collections.emptyList();
        }
        if (translationStatistics.size() <= limit) {
            return randomizeResult(translationStatistics, limit);
        }

        final TranslationDirection direction = training.getConfiguration().getDirection();
        IntSummaryStatistics skillLevelStats =
                translationStatistics.parallelStream()
                        .mapToInt(stat -> {
                            if (direction == TranslationDirection.FROM) {
                                return stat.getSkillLevelFrom();
                            } else if (direction == TranslationDirection.TO) {
                                return stat.getSkillLevelTo();
                            } else {
                                // we return the smaller one to reflect the weaker skill and handle the
                                // preferred direction run on the UI using the statistics object
                                return stat.getSkillLevelFrom() < stat.getSkillLevelTo() ?
                                        stat.getSkillLevelFrom() : stat.getSkillLevelTo();
                            }
                        }).summaryStatistics();
        int minLimit = skillLevelStats.getMin();
        int maxLimit = skillLevelStats.getMax();

        int maxCount = maxLimit - minLimit + 1;
        // minLimit * counter, minLimit+1 * counter -1, ... (maxLimit * 1)
        // e.g. 4 1s, 3 2s, 2 3s, 1 4s
        List<TranslationStatistics> prioritizedStatistics = new ArrayList<>();
        List<TranslationStatistics> remainingStatistics = new ArrayList<>(translationStatistics);
        int currentCount = maxCount;
        while (prioritizedStatistics.size() < limit) {
            LOGGER.info("Adding {} with skill level {}", currentCount, (minLimit + (maxCount - currentCount)));
            prioritizedStatistics.addAll(
                    fetchAndRemoveNext(
                            minLimit + (maxCount - currentCount),
                            currentCount,
                            direction,
                            remainingStatistics));
            currentCount--;
            if (currentCount < 1) {
                currentCount = maxCount;
            }
        }

        return randomizeResult(prioritizedStatistics.subList(0, limit), limit);
    }

    private List<TranslationStatistics> fetchAndRemoveNext(int skillLevel,
                                                           int count,
                                                           TranslationDirection direction,
                                                           List<TranslationStatistics> statisticsList) {
        List<TranslationStatistics> fetched =
                statisticsList.stream()
                        .filter(stat -> matchesSkillForDirection(stat, skillLevel, direction))
                        .limit(count)
                        .collect(Collectors.toList());

        statisticsList.removeAll(fetched);
        LOGGER.info("Effective added count " + fetched.size());
        return fetched;
    }

    private boolean matchesSkillForDirection(TranslationStatistics statistics,
                                             int skillLevel,
                                             TranslationDirection direction) {
        if (direction == TranslationDirection.TO) {
            return statistics.getSkillLevelTo() <= skillLevel;
        } else if (direction == TranslationDirection.FROM) {
            return statistics.getSkillLevelFrom() <= skillLevel;
        } else {
            return statistics.getSkillLevelFrom() <= skillLevel ||
                    statistics.getSkillLevelTo() <= skillLevel;
        }
    }

    private List<TranslationStatistics> fetchNextIteration(Training training, int limit) {
        List<TranslationStatistics> translationStatistics = statisticsRepository
                .findNextTranslationsForIterationConfig(training.getId());
        return randomizeResult(translationStatistics, limit);
    }


    private List<TranslationStatistics> randomizeResult(List<TranslationStatistics> translations, int limit) {
        return translations.parallelStream()
                .map(RandomTranslation::new)
                .sorted(Comparator.comparingInt(RandomTranslation::getRnd))
                .map(RandomTranslation::getStatistics)
                .limit(limit)
                .collect(Collectors.toList());
    }

    public List<TranslationStatistics> getStatisticsList(User user, Integer limit) {
        return statisticsRepository.findByUser(user.getId(), limit);
    }

    void addStatistics(User user, Translation t) {
        TranslationStatistics stats = statisticsRepository.findByUserAndTranslation(user.getId(), t.getId());
        if (stats == null) {
            stats = new TranslationStatistics();
            stats.setUser(user);
            stats.setTranslation(t);
            stats.setSkillLevelFrom(1);
            stats.setSkillLevelTo(1);
            stats.setRuns(new ArrayList<>());
            statisticsRepository.save(stats);
        }
    }

    public void addTranslationRun(Training training, Long translationId, TranslationRun translationRun) {
        Optional<Translation> optionalTranslation = translationService.getTranslation(translationId);
        if (!optionalTranslation.isPresent()) {
            throw new ResourceMissingException("Could not find translation to add run");
        }
        LOGGER.info("Fetching stats for training {} and translation {}", training.getId(), translationId);
        // fetch statistics for translation
        TranslationStatistics stats = statisticsRepository
                .findByTrainingAndTranslation(training.getId(), translationId);

        translationRun.setRunAt(new Date());
        translationRun.setTraining(training);
        if (stats.getRuns() == null) {
            stats.setRuns(new ArrayList<>());
        }
        stats.getRuns().add(translationRun);
        if (translationRun.getHit() == 1) {
            increaseStatsSkill(stats, translationRun.isDirectionTo());
        } else {
            decreaseStatsSkill(stats, translationRun.isDirectionTo());
        }
        statisticsRepository.save(stats);
    }

    private void increaseStatsSkill(TranslationStatistics stats, boolean directionTo) {
        if (directionTo) {
            if (stats.getSkillLevelTo() >= 7) {
                return;
            }
            stats.setSkillLevelTo(stats.getSkillLevelTo() + 1);
        } else {
            if (stats.getSkillLevelFrom() >= 7) {
                return;
            }
            stats.setSkillLevelFrom(stats.getSkillLevelFrom() + 1);
        }
    }

    private void decreaseStatsSkill(TranslationStatistics stats, boolean directionTo) {
        if (directionTo) {
            if (stats.getSkillLevelTo() <= 1) {
                return;
            }
            stats.setSkillLevelTo(stats.getSkillLevelTo() - 1);
        } else {
            if (stats.getSkillLevelFrom() <= 1) {
                return;
            }
            stats.setSkillLevelFrom(stats.getSkillLevelFrom() - 1);
        }
    }

    public TrainingStatistics getStatisticsForTraining(Long id) {
        return statisticsRepository.getStatisticsForTraining(id);
    }

    private class RandomTranslation {
        private int rnd;
        private TranslationStatistics statistics;

        RandomTranslation(TranslationStatistics statistics) {
            this.rnd = (int) (Math.random() * 5000);
            this.statistics = statistics;
        }

        int getRnd() {
            return rnd;
        }

        TranslationStatistics getStatistics() {
            return statistics;
        }
    }

}
