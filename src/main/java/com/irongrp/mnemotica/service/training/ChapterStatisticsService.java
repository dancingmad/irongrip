package com.irongrp.mnemotica.service.training;

import com.irongrp.mnemotica.service.training.model.ChapterStatistics;
import com.irongrp.mnemotica.service.training.model.ChapterStatisticsRepository;
import com.irongrp.mnemotica.service.training.model.Training;
import com.irongrp.mnemotica.service.training.model.TranslationStatistics;
import com.irongrp.mnemotica.service.translation.TranslationService;
import com.irongrp.mnemotica.service.translation.model.Chapter;
import com.irongrp.mnemotica.service.user.model.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class ChapterStatisticsService {

    private static final Logger LOGGER = LoggerFactory.getLogger(ChapterStatisticsService.class);

    @Autowired
    private TranslationService translationService;

    @Autowired
    private TranslationStatisticsService statisticsService;

    @Autowired
    private ChapterStatisticsRepository chapterStatisticsRepository;

    public void updateChapterStatistics(Training training) {
        training.getConfiguration().getChapters().parallelStream()
                .forEach(c -> updateChapterStatistics(training.getCreatedBy(), c));
    }

    private void updateChapterStatistics(User user, Chapter chapter) {
        ChapterStatistics stats = chapterStatisticsRepository
                .findByUserAndChapter(user.getId(), chapter.getId());
        if (stats == null) {
            stats = new ChapterStatistics();
            stats.setChapter(chapter);
            stats.setCreatedBy(user);
        }

        chapter = translationService.getChapter(chapter.getId()).orElse(chapter);
        int totalCount = chapter.getTranslations().size();
        List<TranslationStatistics> statistics = chapter.getTranslations().parallelStream()
                .map(t -> statisticsService.getStatistics(user, t.getId()))
                .filter(Objects::nonNull)
                .collect(Collectors.toList());

        Map<Integer, List<TranslationStatistics>> statisticsMapFrom = statistics
                .parallelStream()
                .collect(Collectors.groupingBy(TranslationStatistics::getSkillLevelFrom));
        Map<Integer, List<TranslationStatistics>> statisticsMapTo = statistics
                .parallelStream()
                .collect(Collectors.groupingBy(TranslationStatistics::getSkillLevelTo));

        stats.setChapterScoreFrom(calculateChapterLevel(statisticsMapFrom, totalCount));
        stats.setChapterScoreTo(calculateChapterLevel(statisticsMapTo, totalCount));

        chapterStatisticsRepository.save(stats);
    }

    private int calculateChapterLevel(Map<Integer, List<TranslationStatistics>> statisticsMap, int totalCount) {
        int thresholdCount = totalCount >>> 1;
        int minLevel = statisticsMap.keySet().parallelStream().min(Integer::compareTo).orElse(0);
        if (minLevel >= 4) {
            return 300;
        }
        if (evaluateRule(thresholdCount, minLevel, statisticsMap.keySet(), 3)) {
            return 200;
        }
        if (evaluateRule(thresholdCount, minLevel, statisticsMap.keySet(), 2)) {
            return 100;
        }

        return 0;
    }

    private boolean evaluateRule(int thresholdCount,
                                 int minLevel,
                                 Set<Integer> statistics,
                                 int ruleLevel) {
        return minLevel >= ruleLevel ||
                statistics.parallelStream()
                        .filter(value -> value > ruleLevel)
                        .count() >= thresholdCount;
    }

    public ChapterStatistics getStatistics(User user, Chapter chapter) {
        return chapterStatisticsRepository.findByUserAndChapter(user.getId(), chapter.getId());
    }

}
