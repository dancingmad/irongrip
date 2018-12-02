package com.irongrp.mnemotica.service.translation;

import com.irongrp.mnemotica.service.exception.GeneralException;
import com.irongrp.mnemotica.service.exception.ResourceAlreadyExistingException;
import com.irongrp.mnemotica.service.exception.ResourceMissingException;
import com.irongrp.mnemotica.service.exception.UnauthorizedException;
import com.irongrp.mnemotica.service.training.ChapterStatisticsService;
import com.irongrp.mnemotica.service.translation.model.*;
import com.irongrp.mnemotica.service.user.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional
public class TranslationService {

    @Autowired
    private CourseRepository courseRepository;
    @Autowired
    private ChapterRepository chapterRepository;
    @Autowired
    private TranslationRepository translationRepository;
    @Autowired
    private TranslationTagRepository translationTagRepository;

    @Autowired
    private ChapterStatisticsService chapterStatisticsService;

    public Optional<Course> getCourse(User user, Long id) {
        Optional<Course> course = courseRepository.findById(id);
        course.ifPresent(
                c -> c.getChapters().forEach(chapter -> attachStatistics(user, chapter))
        );
        return course;
    }

    private void attachStatistics(User user, Chapter chapter) {
        chapter.setChapterStatistics(chapterStatisticsService.getStatistics(user, chapter));
    }

    public Optional<Chapter> getChapter(Long id) {
        return chapterRepository.findById(id, 3);
    }

    public Optional<Translation> getTranslation(Long id) {
        return translationRepository.findById(id);
    }

    public Course saveCourse(Course course) {
        return courseRepository.save(course);
    }


    public Translation saveTranslation(Translation translation) {
        if (translation.getId() != null) {
            throw new ResourceAlreadyExistingException("Adding Translation with id already existing");
        }
        translation.setEmptyTag(getEmptyTag());
        return translationRepository.save(translation, 1);
    }

    public TranslationTag getEmptyTag() {
        TranslationTag translationTag = translationTagRepository.getEmptyTag();
        if (translationTag == null) {
            translationTag = new TranslationTag();
            translationTag.setName("EMPTY_TAG");
            Translation dummyTranslation = new Translation();
            dummyTranslation.setEmptyTag(translationTag);
            translationRepository.save(dummyTranslation);
            return dummyTranslation.getEmptyTag();
        }
        return translationTag;
    }

    public Translation updateTranslation(Translation translation) {
        return translationRepository.save(
                translationRepository
                        .findById(translation.getId())
                        .get()
                        .merge(translation));
    }

    public TranslationTag saveTag(TranslationTag tag) {
        return translationTagRepository.save(tag);
    }

    public List<TranslationTag> listTags() {
        return translationTagRepository.findAllUsed();
    }


    public void deleteCourse(User user, Long id) {
        Course course = courseRepository.findById(id).get();
        if (course.getCreatedBy() != user) {
            throw new UnauthorizedException("Cannot delete course created by other user");
        }
        course.getChapters().forEach(chapterRepository::delete);
        courseRepository.delete(course);
    }


    public Course updateCourse(Course course, User user) {
        Optional<Course> courseOptional = courseRepository
                .findById(course.getId());
        if (!courseOptional.isPresent()) {
            throw new ResourceMissingException("Course is not available " + course.getId());
        }
        if (courseOptional.get().getCreatedBy() == null) {
            courseOptional.get().setCreatedBy(user);
        }
        if (!courseOptional.get().getCreatedBy().equals(user)) {
            throw new UnauthorizedException("User not allowed to change course");
        }
        return courseRepository.save(courseOptional.get().merge(course));
    }

    public Chapter updateChapter(Chapter chapter, User user) {
        Optional<Chapter> optionalChapter = chapterRepository.findById(chapter.getId());
        if (!optionalChapter.isPresent()) {
            throw new GeneralException("Could not find chapter with id " + chapter.getId());
        }
        Chapter persistedChapter = optionalChapter.get();
        if (persistedChapter.getCreatedBy() == null) {
            persistedChapter.setCreatedBy(user);
        }
        if (!persistedChapter.getCreatedBy().equals(user)) {
            throw new UnauthorizedException("Cannot update chapter of other user "
                    + persistedChapter.getCreatedBy().getUsername());
        }
        chapter = chapterRepository.save(persistedChapter.merge(chapter), 1);
        translationRepository.deleteUnusedTranslations(user.getId());
        return chapter;
    }

    public List<Course> listCourses(User user) {
        List<Course> courses = new ArrayList<>();
        courseRepository.findAll().forEach(courses::add);
        courses.forEach(c -> c.getChapters().parallelStream().forEach(
                chapter -> attachStatistics(user, chapter)));
        return courses;
    }

    public List<Course> fetchCoursesForBackup(User user) {
        List<Course> courses = courseRepository.findByUser(user.getId());
        return courses.parallelStream().map(this::fetchCourse).collect(Collectors.toList());
    }

    private Course fetchCourse(Course course) {
        return courseRepository.findById(course.getId(), 4).orElse(null);
    }


    public List<Translation> getTranslationsForTraining(Long configurationId) {
        return translationRepository.getTranslationsForTraining(configurationId);
    }


}
