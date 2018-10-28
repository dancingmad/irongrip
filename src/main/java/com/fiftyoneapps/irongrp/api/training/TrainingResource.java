package com.fiftyoneapps.irongrp.api.training;

import com.fiftyoneapps.irongrp.service.exception.ResourceMissingException;
import com.fiftyoneapps.irongrp.service.exception.UnauthorizedException;
import com.fiftyoneapps.irongrp.service.training.TrainingService;
import com.fiftyoneapps.irongrp.service.training.model.Training;
import com.fiftyoneapps.irongrp.service.training.model.TrainingConfiguration;
import com.fiftyoneapps.irongrp.service.translation.model.Chapter;
import com.fiftyoneapps.irongrp.service.user.UserService;
import com.fiftyoneapps.irongrp.service.user.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/training")
public class TrainingResource {

    @Autowired
    private TrainingService trainingService;

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public List<Training> list(HttpServletRequest request) {
        User user = userService.getLoggedInUser(request);
        List<Training> trainings = trainingService.findLatestTrainings(user);
        trainings.parallelStream().forEach(
                training -> training.getConfiguration()
                        .getChapters()
                        .sort(Comparator.comparingInt(Chapter::getIndex))
        );
        return trainings;
    }

    @RequestMapping(value = "/{trainingId}", method = RequestMethod.GET)
    public Training get(@PathVariable Long trainingId, HttpServletRequest request) {
        User user = userService.getLoggedInUser(request);
        Optional<Training> training = trainingService.getTraining(trainingId);
        if (!training.isPresent()) {
            throw new ResourceMissingException("Training with not found");
        }
        if (!training.get().getCreatedBy().getId().equals(user.getId())) {
            throw new UnauthorizedException("Training with not allowed for logged in user");
        }
        return training.get();
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public Training add(@RequestBody TrainingConfiguration configuration, HttpServletRequest request) {
        User user = userService.getLoggedInUser(request);
        return trainingService.createTraining(user, configuration);
    }

    @RequestMapping(value = "/{trainingId}/close", method = RequestMethod.POST)
    public Training close(@PathVariable Long trainingId, HttpServletRequest request) {
        User user = userService.getLoggedInUser(request);
        Optional<Training> trainingOptional = trainingService.getTraining(trainingId);
        if (!trainingOptional.isPresent()) {
            throw new ResourceMissingException("Could not find training with id " + trainingId);
        }
        Training training = trainingOptional.get();
        if (training.getEndedAt() != null) {
            return training;
        }
        if (!user.equals(training.getCreatedBy())) {
            throw new UnauthorizedException("Saving Training is not allowed for logged in user");
        }
        return trainingService.closeTraining(trainingId);
    }


}
