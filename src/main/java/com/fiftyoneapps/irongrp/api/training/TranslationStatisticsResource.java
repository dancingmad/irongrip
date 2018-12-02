package com.fiftyoneapps.irongrp.api.training;

import com.fiftyoneapps.irongrp.service.exception.ResourceAlreadyExistingException;
import com.fiftyoneapps.irongrp.service.exception.ResourceMissingException;
import com.fiftyoneapps.irongrp.service.exception.UnauthorizedException;
import com.fiftyoneapps.irongrp.service.image.TranslationImageService;
import com.fiftyoneapps.irongrp.service.training.TrainingService;
import com.fiftyoneapps.irongrp.service.training.TranslationStatisticsService;
import com.fiftyoneapps.irongrp.service.training.model.Training;
import com.fiftyoneapps.irongrp.service.training.model.TranslationRun;
import com.fiftyoneapps.irongrp.service.training.model.TranslationStatistics;
import com.fiftyoneapps.irongrp.service.user.UserService;
import com.fiftyoneapps.irongrp.service.user.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/statistics/translation")
public class TranslationStatisticsResource {

    @Autowired
    private TranslationStatisticsService translationStatisticsService;

    @Autowired
    private UserService userService;

    @Autowired
    private TrainingService trainingService;

    @Autowired
    private TranslationImageService translationImageService;

    @RequestMapping(value = "/{translationId}", method = RequestMethod.GET)
    public TranslationStatistics getStatistics(@PathVariable("translationId") Long translationId,
                                               HttpServletRequest request) {
        User user = userService.getLoggedInUser(request);
        return translationStatisticsService.getStatistics(user, translationId);
    }

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public List<TranslationStatistics> findStatistics(@RequestParam(required = false) Long trainingId,
                                                      @RequestParam(required = false) Integer limit,
                                                      HttpServletRequest request) {
        if (limit == null) {
            limit = 100;
        }
        User user = userService.getLoggedInUser(request);
        if (trainingId == null) {
            return translationStatisticsService.getStatisticsList(user, limit);
        }
        Optional<Training> trainingOptional = trainingService.getTraining(trainingId);
        if (!trainingOptional.isPresent()) {
            throw new ResourceMissingException("Training with id " + trainingId + " does not exist");
        }
        if (!trainingOptional.get().getCreatedBy().getId().equals(user.getId())) {
            throw new UnauthorizedException("Training with id " + trainingId +
                    " is not allowed for user " + user.getId());
        }
        List<TranslationStatistics> statistics = translationStatisticsService
                .fetchNextTranslationStatistics(trainingOptional.get(), limit);
        addIconsToTranslations(statistics);
        if (statistics.isEmpty()) {
            trainingService.closeTraining(trainingId);
        }
        return statistics;
    }

    private void addIconsToTranslations(List<TranslationStatistics> statistics) {
        statistics.parallelStream()
                .map(TranslationStatistics::getTranslation)
                .forEach(t -> t.setIconUrl(translationImageService.getImagePathForTranslation(t)));
    }

    @RequestMapping(value = "/{trainingId}/{translationId}", method = RequestMethod.POST)
    public void add(@PathVariable Long trainingId, @PathVariable Long translationId, @RequestBody TranslationRun translationRun, HttpServletRequest request) {
        User user = userService.getLoggedInUser(request);
        if (translationRun.getId() != null) {
            throw new ResourceAlreadyExistingException("Cannot add already existing training run");
        }
        Optional<Training> trainingOptional = trainingService.getTraining(trainingId);
        if (!trainingOptional.isPresent()) {
            throw new ResourceMissingException("Could not find training to add run");
        }
        Training training = trainingOptional.get();
        if (!training.getCreatedBy().equals(user)) {
            throw new UnauthorizedException("Created Training does not match logged in user");
        }
        translationStatisticsService.addTranslationRun(training, translationId, translationRun);
    }
}
