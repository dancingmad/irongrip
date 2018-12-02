package com.irongrp.mnemotica.api.translation;

import com.irongrp.mnemotica.service.exception.GeneralException;
import com.irongrp.mnemotica.service.exception.ResourceAlreadyExistingException;
import com.irongrp.mnemotica.service.exception.ResourceMissingException;
import com.irongrp.mnemotica.service.translation.TranslationService;
import com.irongrp.mnemotica.service.translation.model.Chapter;
import com.irongrp.mnemotica.service.translation.model.Course;
import com.irongrp.mnemotica.service.user.UserService;
import com.irongrp.mnemotica.service.user.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/course")
public class CourseResource {

    @Autowired
    private TranslationService translationService;

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public List<Course> list(HttpServletRequest request) {
        User user = userService.getLoggedInUser(request);
        List<Course> courses = translationService.listCourses(user);
        courses.parallelStream().forEach(
                course -> course.getChapters()
                        .sort(Comparator.comparingInt(Chapter::getIndex))
        );
        return courses;
    }

    @RequestMapping(value = "/{courseId}", method = RequestMethod.PUT)
    public Course updateCourse(@PathVariable Long courseId,
                               @RequestBody Course course,
                               HttpServletRequest request) {
        User user = userService.getLoggedInUser(request);
        if (!courseId.equals(course.getId())) {
            throw new GeneralException("Id mismatch for course to be updated");
        }
        return sortCourseChapters(translationService.updateCourse(course, user));
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public Course addCourse(@RequestBody Course course, HttpServletRequest request) {
        User user = userService.getLoggedInUser(request);
        if (course.getId() != null) {
            throw new ResourceAlreadyExistingException("Course is already persisted");
        }
        course.setCreatedBy(user);
        course.getChapters().parallelStream().forEach(c -> c.setCreatedBy(user));
        return sortCourseChapters(translationService.saveCourse(course));
    }

    @RequestMapping(value = "/{courseId}", method = RequestMethod.DELETE)
    public void deleteCourse(@PathVariable Long courseId, HttpServletRequest request) {
        User user = userService.getLoggedInUser(request);
        translationService.deleteCourse(user, courseId);
    }

    @RequestMapping(value = "/{courseId}", method = RequestMethod.GET)
    public Course getCourse(@PathVariable Long courseId, HttpServletRequest request) {
        User user = userService.getLoggedInUser(request);
        Optional<Course> courseOptional = translationService.getCourse(user, courseId);
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
