package com.fiftyoneapps.irongrp.api.translation;

import com.fiftyoneapps.irongrp.service.translation.TranslationService;
import com.fiftyoneapps.irongrp.service.translation.model.Course;
import com.fiftyoneapps.irongrp.service.translation.model.TranslationTag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/course")
public class CourseResource {

    @Autowired
    private TranslationService translationService;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public List<Course> list() {
        return translationService.listCourses();
    }

    @RequestMapping(value = "/", method = RequestMethod.PUT)
    public Course addTranslationTag(@RequestBody Course course) {
        return translationService.saveCourse(course);
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public Course saveTranslationTag(@RequestBody Course course) {
        return translationService.saveCourse(course);
    }



}
