package com.fiftyoneapps.irongrp.api.translation;

import com.fiftyoneapps.irongrp.service.exception.GeneralException;
import com.fiftyoneapps.irongrp.service.exception.ResourceMissingException;
import com.fiftyoneapps.irongrp.service.translation.TranslationService;
import com.fiftyoneapps.irongrp.service.translation.model.Translation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/translation")
public class TranslationResource {

    @Autowired
    private TranslationService translationService;

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
        return translationService.saveTranslation(translation);
    }

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public List<Translation> listTranslations() {
        return translationService.listTranslations();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Translation getTranslation(@PathVariable Long id) {
        Optional<Translation> translationOptional = translationService.getTranslation(id);
        if (!translationOptional.isPresent()) {
            throw new ResourceMissingException("Translation with id "+ id +" not found");
        }
        return translationOptional.get();
    }



}
