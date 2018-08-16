package com.fiftyoneapps.irongrp.api.translation;

import com.fiftyoneapps.irongrp.service.exception.GeneralException;
import com.fiftyoneapps.irongrp.service.exception.ResourceAlreadyExistingException;
import com.fiftyoneapps.irongrp.service.translation.TranslationService;
import com.fiftyoneapps.irongrp.service.translation.model.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @RequestMapping(value = "/{courseId}", method = RequestMethod.PUT)
    public Course saveCourse(@RequestParam Long courseId, @RequestBody Course course) {
        if (!courseId.equals(course.getId())) {
            throw new GeneralException("Id mismatch for course to be updated");
        }
        return translationService.saveCourse(course);
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public Course addCourse(@RequestBody Course course) {
        if (course.getId() != null) {
            throw new ResourceAlreadyExistingException("Course is already persisted");
        }
        return translationService.saveCourse(course);
    }

    @RequestMapping(value = "/{courseId}", method = RequestMethod.DELETE)
    public void deleteCourse(@RequestParam Long courseId) {
        translationService.deleteChapter(courseId);
    }

}
