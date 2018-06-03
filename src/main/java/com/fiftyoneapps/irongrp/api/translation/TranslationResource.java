package com.fiftyoneapps.irongrp.api.translation;

import com.fiftyoneapps.irongrp.service.translation.TranslationService;
import com.fiftyoneapps.irongrp.service.translation.model.Translation;
import com.fiftyoneapps.irongrp.service.translation.model.TranslationTag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/translation")
public class TranslationResource {

    @Autowired
    private TranslationService translationService;

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public Translation addTranslation(@RequestBody Translation translation) {
        return translationService.saveTranslation(translation);
    }

    @RequestMapping(value = "/", method = RequestMethod.PUT)
    public Translation changeTranslation(@RequestBody Translation translation) {
        return translationService.saveTranslation(translation);
    }



}
