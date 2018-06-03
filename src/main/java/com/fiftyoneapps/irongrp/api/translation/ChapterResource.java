package com.fiftyoneapps.irongrp.api.translation;

import com.fiftyoneapps.irongrp.service.translation.TranslationService;
import com.fiftyoneapps.irongrp.service.translation.model.Chapter;
import com.fiftyoneapps.irongrp.service.translation.model.Course;
import com.fiftyoneapps.irongrp.service.translation.model.TranslationTag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/chapter")
public class ChapterResource {

    @Autowired
    private TranslationService translationService;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public List<Chapter> list() {
        return translationService.listChapters();
    }

    @RequestMapping(value = "/", method = RequestMethod.PUT)
    public void changeChapter(@RequestBody Chapter chapter) {
        translationService.saveChapter(chapter);
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public Chapter addChapter(@RequestBody Chapter chapter) {
        return translationService.addChapter(chapter);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable Long id) {
        translationService.deleteChapter(id);
    }

}
