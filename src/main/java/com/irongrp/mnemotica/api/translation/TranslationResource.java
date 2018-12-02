package com.irongrp.mnemotica.api.translation;

import com.irongrp.mnemotica.service.exception.GeneralException;
import com.irongrp.mnemotica.service.exception.ResourceMissingException;
import com.irongrp.mnemotica.service.training.TrainingService;
import com.irongrp.mnemotica.service.translation.TranslationService;
import com.irongrp.mnemotica.service.translation.model.Translation;
import com.irongrp.mnemotica.service.user.UserService;
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
