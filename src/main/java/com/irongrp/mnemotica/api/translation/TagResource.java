package com.irongrp.mnemotica.api.translation;

import com.irongrp.mnemotica.service.translation.TranslationService;
import com.irongrp.mnemotica.service.translation.model.TranslationTag;
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

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public TranslationTag addTranslationTag(@RequestBody TranslationTag translationTag) {
        return translationService.saveTag(translationTag);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteTag(@PathVariable  Long id) {

    }


}
