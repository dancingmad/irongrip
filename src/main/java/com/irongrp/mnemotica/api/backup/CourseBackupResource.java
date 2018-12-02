package com.irongrp.mnemotica.api.backup;

import com.irongrp.mnemotica.service.exception.GeneralException;
import com.irongrp.mnemotica.service.translation.TranslationService;
import com.irongrp.mnemotica.service.translation.model.Chapter;
import com.irongrp.mnemotica.service.translation.model.Course;
import com.irongrp.mnemotica.service.translation.model.Translation;
import com.irongrp.mnemotica.service.translation.model.TranslationTag;
import com.irongrp.mnemotica.service.user.UserService;
import com.irongrp.mnemotica.service.user.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.ReflectionUtils;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.lang.reflect.Field;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/backup/course")
public class CourseBackupResource {

    @Autowired
    private TranslationService translationService;

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public Backup getAllCourses(HttpServletRequest request) {
        User user = userService.getLoggedInUser(request);
        List<Course> courses = translationService.fetchCoursesForBackup(user);
        // we need to remove all ids to allow the data to be posted for duplication
        courses.parallelStream().forEach(this::removeIds);
        return new Backup()
                .createdAt(new Date())
                .createdBy(user)
                .courses(courses);
    }

    private void removeIds(Course course) {
        try {
            removeId(course);
            course.setCreatedBy(null);
            course.getChapters().parallelStream().forEach(this::removeIds);
        } catch (Exception e) {
            throw new GeneralException("Could not remove Id for course", e);
        }
    }

    private void removeIds(Chapter chapter) {
        try {
            removeId(chapter);
            chapter.setCreatedBy(null);
            chapter.setChapterStatistics(null);
            chapter.getTranslations().parallelStream().forEach(this::removeIds);
        } catch (Exception e) {
            throw new GeneralException("Could not remove Id for course", e);
        }
    }

    private void removeIds(Translation translation) {
        try {
            removeId(translation);
            translation.setCreatedBy(null);
            // translations
            translation.getTranslatesTo().parallelStream().forEach(this::removeIds);
            // tags
            // TODO we don't want to create new tags for each translation, they need to be shared somehow
            // translation.getTags().parallelStream().forEach(this::removeIds);
            // phrases
            translation.getPhrases().parallelStream().forEach(this::removeIds);
        } catch (Exception e) {
            throw new GeneralException("Could not remove Id for course", e);
        }
    }

    private void removeIds(TranslationTag tag) {
        try {
            removeId(tag);
            tag.setCreatedBy(null);
        } catch (Exception e) {
            throw new GeneralException("Could not remove Id for course", e);
        }
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public void addCourses(@RequestBody Backup backup, HttpServletRequest request) {
        User user = userService.authenticate(backup.getCreatedBy().getUsername(), backup.getAuthorisation());
        backup.getCourses().parallelStream().forEach(
                c -> {
                    c.setCreatedBy(user);
                    c.getChapters().parallelStream().forEach(
                            chapter -> {
                                chapter.setCreatedBy(user);
                                chapter.getTranslations().parallelStream().forEach(
                                        t -> {
                                            t.setCreatedBy(user);
                                            t.getPhrases().parallelStream().forEach(p -> p.setCreatedBy(user));
                                            t.getTranslatesTo().parallelStream().forEach(tt -> tt.setCreatedBy(user));
                                        }
                                );
                            }

                    );
                    translationService.saveCourse(c);
                }
        );
    }


    private void removeId(Object object) throws IllegalAccessException {
        Field id = ReflectionUtils.findField(object.getClass(), "id");
        if (id == null) {
            return;
        }
        id.setAccessible(true);
        id.set(object, null);
    }

    static class Backup {
        private User createdBy;
        private Date createdAt;
        private List<Course> courses;
        private String authorisation;

        public Backup createdBy(User user) {
            this.createdBy = user;
            return this;
        }

        public Backup createdAt(Date date) {
            this.createdAt = date;
            return this;
        }

        public Backup courses(List<Course> courses) {
            this.courses = courses;
            return this;
        }

        public User getCreatedBy() {
            return createdBy;
        }

        public Date getCreatedAt() {
            return createdAt;
        }

        public String getAuthorisation() {
            return authorisation;
        }

        public List<Course> getCourses() {
            return courses;

        }
    }

}
