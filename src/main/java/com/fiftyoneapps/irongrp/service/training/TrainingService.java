package com.fiftyoneapps.irongrp.service.training;

import com.fiftyoneapps.irongrp.service.exception.GeneralException;
import com.fiftyoneapps.irongrp.service.training.model.*;
import com.fiftyoneapps.irongrp.service.translation.TranslationService;
import com.fiftyoneapps.irongrp.service.translation.model.Translation;
import com.fiftyoneapps.irongrp.service.user.model.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class TrainingService {

    private static final Logger LOGGER = LoggerFactory.getLogger(TrainingService.class);

    @Autowired
    private TrainingConfigurationRepository configurationRepository;

    @Autowired
    private TrainingRepository trainingRepository;

    @Autowired
    private TranslationService translationService;

    @Autowired
    private TranslationStatisticsService statisticsService;

    @Autowired
    private ChapterStatisticsService chapterStatisticsService;

    public List<Training> findLatestTrainings(User user) {
        return trainingRepository.findLatestTrainings(user.getId())
                .parallelStream()
                .map(id -> trainingRepository.findById(id, 2).orElse(null))
                .filter(Objects::nonNull)
                .collect(Collectors.toList());
    }

    public Training createTraining(User user, TrainingConfiguration configuration) {
        if (CollectionUtils.isEmpty(configuration.getTags())) {
            configuration.setTags(Collections.singletonList(translationService.getEmptyTag()));
        }
        if (CollectionUtils.isEmpty(configuration.getChapters())) {
            throw new GeneralException("No chapters selected for training");
        }
        configuration = configurationRepository.save(configuration);
        // fetch all translations and add (missing) statistics
        List<Translation> translations = translationService.getTranslationsForTraining(configuration.getId());
        translations.forEach(t -> statisticsService.addStatistics(user, t));
        Training training = new Training();
        training.setTranslations(translations);
        training.setConfiguration(configuration);
        training.setStartedAt(new Date());
        training.setCreatedBy(user);
        training = trainingRepository.save(training);
        training.setResult(calculateStatistics(training));
        return trainingRepository.save(training);
    }

    public Optional<Training> getTraining(Long trainingId) {
        return trainingRepository.findById(trainingId, 2);
    }

    public Training closeTraining(Long trainingId) {
        Optional<Training> trainingOptional = trainingRepository.findById(trainingId);
        if (!trainingOptional.isPresent()) {
            return null;
        }
        Training training = trainingOptional.get();
        training.setEndedAt(new Date());
        // fetch cumulated stat data for training and attach to training
        training.setResult(calculateStatistics(training));
        // update chapter statistics
        chapterStatisticsService.updateChapterStatistics(training);
        return trainingRepository.save(training);
    }

    private TrainingResult calculateStatistics(Training training) {
        TrainingStatistics stats =
                statisticsService.getStatisticsForTraining(training.getId());
        TrainingResult result = new TrainingResult();
        result.setMinSkillFrom(stats.getMinSkillLevelFrom());
        result.setMinSkillTo(stats.getMinSkillLevelTo());
        result.setRunCount(stats.getRunCount());
        result.setHitScore((int) ((stats.getHitCount() / (double) stats.getRunCount()) * 100));
        result.setSkillScoreFrom((int) (stats.getAvgSkillLevelFrom() * 100) - 100);
        result.setSkillScoreTo((int) (stats.getAvgSkillLevelTo() * 100) - 100);
        return result;
    }

    public Training save(Training training) {
        return trainingRepository.save(training);
    }
}
