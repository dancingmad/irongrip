package com.fiftyoneapps.irongrp.api.translation;

import com.fiftyoneapps.irongrp.service.exception.GeneralException;
import com.fiftyoneapps.irongrp.service.exception.ResourceMissingException;
import com.fiftyoneapps.irongrp.service.training.TrainingService;
import com.fiftyoneapps.irongrp.service.translation.TranslationService;
import com.fiftyoneapps.irongrp.service.translation.model.Translation;
import com.fiftyoneapps.irongrp.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/translation")
public class TranslationResource {

    @Autowired
    private TranslationService translationService;

    @Autowired
    private TrainingService trainingService;

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public Translation addTranslation(@RequestBody Translation translation) {
        return translationService.saveTranslation(translation);
    }

    @RequestMapping(value = "/{translationId}", method = RequestMethod.PUT)
    public Translation changeTranslation(@PathVariable Long translationId,
                                         @RequestBody Translation translation) {
        if (!translationId.equals(translation.getId())) {
            throw new GeneralException("Id mismatch");
        }
        return translationService.updateTranslation(translation);
    }

    @RequestMapping(value = "/{translationId}", method = RequestMethod.GET)
    public Translation getTranslation(@PathVariable Long translationId) {
        Optional<Translation> translationOptional = translationService.getTranslation(translationId);
        if (!translationOptional.isPresent()) {
            throw new ResourceMissingException("Translation with id " + translationId + " not found");
        }
        return translationOptional.get();
    }


}
