package com.fiftyoneapps.irongrp.api.translation;

import com.fiftyoneapps.irongrp.service.hero.model.Hero;
import com.fiftyoneapps.irongrp.service.translation.TranslationService;
import com.fiftyoneapps.irongrp.service.translation.model.TranslationTag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tag")
public class TagResource {

    @Autowired
    private TranslationService translationService;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public List<TranslationTag> list() {
        return translationService.listTags();
    }

    @RequestMapping(value = "/", method = RequestMethod.PUT)
    public TranslationTag addTranslationTag(@RequestBody TranslationTag translationTag) {
        return translationService.saveTag(translationTag);
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public TranslationTag saveTranslationTag(@RequestBody TranslationTag translationTag) {
        return translationService.saveTag(translationTag);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteTag(@PathVariable  Long id) {

    }


}
