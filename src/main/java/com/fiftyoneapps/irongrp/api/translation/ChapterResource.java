package com.fiftyoneapps.irongrp.api.translation;

import com.fiftyoneapps.irongrp.service.exception.GeneralException;
import com.fiftyoneapps.irongrp.service.exception.ResourceMissingException;
import com.fiftyoneapps.irongrp.service.translation.TranslationService;
import com.fiftyoneapps.irongrp.service.translation.model.Chapter;
import com.fiftyoneapps.irongrp.service.user.UserService;
import com.fiftyoneapps.irongrp.service.user.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Optional;

@RestController
@RequestMapping("/api/chapter")
public class ChapterResource {

    @Autowired
    private TranslationService translationService;

    @Autowired
    private UserService userService;


    @RequestMapping(value = "/{chapterId}", method = RequestMethod.PUT)
    public Chapter updateChapter(@PathVariable Long chapterId, @RequestBody Chapter chapter, HttpServletRequest request) {
        User user = userService.getLoggedInUser(request);
        if (!chapterId.equals(chapter.getId())) {
            throw new GeneralException("Id mismatch for chapter to be updated");
        }
        return translationService.updateChapter(chapter, user);
    }

    @RequestMapping(value = "/{chapterId}", method = RequestMethod.GET)
    public Chapter getChapter(@PathVariable Long chapterId) {
        Optional<Chapter> chapterOptional = translationService.getChapter(chapterId);
        if (!chapterOptional.isPresent()) {
            throw new ResourceMissingException("Chapter with id "+ chapterId +" not found");
        }
        return chapterOptional.get();
    }
}
