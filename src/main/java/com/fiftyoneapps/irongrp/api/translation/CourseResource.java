package com.fiftyoneapps.irongrp.api.translation;

import com.fiftyoneapps.irongrp.service.exception.GeneralException;
import com.fiftyoneapps.irongrp.service.exception.ResourceAlreadyExistingException;
import com.fiftyoneapps.irongrp.service.exception.ResourceMissingException;
import com.fiftyoneapps.irongrp.service.translation.TranslationService;
import com.fiftyoneapps.irongrp.service.translation.model.Chapter;
import com.fiftyoneapps.irongrp.service.translation.model.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

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
    public Course updateCourse(@PathVariable Long courseId, @RequestBody Course course) {
        if (!courseId.equals(course.getId())) {
            throw new GeneralException("Id mismatch for course to be updated");
        }
        return sortCourseChapters(translationService.updateCourse(course));
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public Course addCourse(@RequestBody Course course) {
        if (course.getId() != null) {
            throw new ResourceAlreadyExistingException("Course is already persisted");
        }
        return sortCourseChapters(translationService.saveCourse(course));
    }

    @RequestMapping(value = "/{courseId}", method = RequestMethod.DELETE)
    public void deleteCourse(@RequestParam Long courseId) {
        translationService.deleteCourse(courseId);
    }

    @RequestMapping(value = "/{courseId}", method = RequestMethod.GET)
    public Course getCourse(@PathVariable Long courseId) {
        Optional<Course> courseOptional = translationService.getCourse(courseId);
        if (!courseOptional.isPresent()) {
            throw new ResourceMissingException("Course with id "+ courseId +" not found");
        }

        return sortCourseChapters(courseOptional.get());
    }

    private Course sortCourseChapters(Course course) {
        course.setChapters(course.getChapters().stream()
                .sorted(Comparator.comparingInt(Chapter::getIndex))
                .collect(Collectors.toList()));
        return course;
    }

}
