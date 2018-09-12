package com.fiftyoneapps.irongrp.service.training;

import com.fiftyoneapps.irongrp.service.training.model.*;
import com.fiftyoneapps.irongrp.service.translation.TranslationService;
import com.fiftyoneapps.irongrp.service.translation.model.Translation;
import com.fiftyoneapps.irongrp.service.user.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TrainingService {

    @Autowired
    private TranslationStatisticsRepository statisticsRepository;

    @Autowired
    private TrainingConfigurationRepository configurationRepository;

    @Autowired
    private TrainingRepository trainingRepository;

    @Autowired
    private TranslationService translationService;

    public TranslationStatistics getStatistics(User user, Long translationId) {
        return statisticsRepository.findByUserAndTranslationId(user.getId(), translationId);
    }

    public List<Training> getOngoingTrainings(User user) {
        // only fetch training list for further loading
        return trainingRepository.findOngoingTrainings(user.getId());
    }

    public List<Translation> fetchNextTranslations(Training training) {
        TrainingConfiguration configuration = training.getConfiguration();
        List<Translation> translations;
        if (configuration.isIterationMode()) {
            // for iteration mode fetch next translations based on iterationlimit  ordered by last run
            translations = fetchNextIteration(training);
        } else {
            // skill mode, fetch translations
            translations = fetchNextSkill(training);
        }

        if (translations.isEmpty()) {
            training.setEndedAt(new Date());
            trainingRepository.save(training);
        }
        return translations;
    }

    private List<Translation> fetchNextSkill(Training training) {
        //TODO: implement me!
        return null;
    }

    private List<Translation> fetchNextIteration(Training training) {
        // get translations ordered by last run having run count less than iterationLimit
        return statisticsRepository.findNextTranslationWithRunCountOrderedByLastRun(training.getId());
    }

    public Training createTraining(User user, TrainingConfiguration configuration) {
        configuration = configurationRepository.save(configuration);
        // fetch all translations for configuration
        List<Translation> translations = translationService.getTranslationsForTraining(configuration.getId());
        // persist new training
        Training training = new Training();
        training.setConfiguration(configuration);
        training.setTranslations(translations);
        training.setStartedAt(new Date());
        training.setCreatedBy(user);
        return trainingRepository.save(training);
    }


    public void addTranslationRun(User user,
                                  Training training,
                                  Translation translation,
                                  boolean directionTo,
                                  boolean hit) {
        // fetch statistics for translation
        TranslationStatistics stats = getStatistics(user, translation.getId());
        if (stats == null) {
            stats = new TranslationStatistics();
            stats.setUser(user);
            stats.setTranslation(translation);
            stats.setSkillLevelFrom(1);
            stats.setSkillLevelTo(1);
            stats.setRuns(new ArrayList<>());
        }
        TranslationRun run = new TranslationRun();
        run.setDirectionTo(directionTo);
        run.setHit(hit);
        run.setRunAt(new Date());
        run.setTraining(training);
        stats.getRuns().add(run);
        if (hit) {
            increaseStatsSkill(stats, directionTo);
        } else {
            decreaseStatsSkill(stats, directionTo);
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

}
