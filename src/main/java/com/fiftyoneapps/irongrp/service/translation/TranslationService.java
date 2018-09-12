package com.fiftyoneapps.irongrp.service.translation;

import com.fiftyoneapps.irongrp.service.exception.ResourceAlreadyExistingException;
import com.fiftyoneapps.irongrp.service.translation.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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

    public Optional<Course> getCourse(Long id) {
        return courseRepository.findById(id);
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
        return translationRepository.save(translation);
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

    public List<Chapter> listChapters() {
        List<Chapter> chapters = new ArrayList<>();
        chapterRepository.findAll().forEach(chapters::add);
        return chapters;
    }

    public void deleteTag(Long id) {
        translationTagRepository.deleteById(id);
    }

    public void deleteTranslation(Long id) {
        translationTagRepository.deleteById(id);
    }



    public void deleteCourse(Long id) {
        Course course = courseRepository.findById(id).get();
        course.getChapters().forEach(chapterRepository::delete);
        courseRepository.delete(course);
    }


    public Course updateCourse(Course course) {
        return courseRepository.save(
                courseRepository
                        .findById(course.getId())
                        .get().merge(course));
    }


    public Chapter updateChapter(Chapter chapter) {
        return chapterRepository.save(
                chapterRepository.findById(chapter.getId())
                        .get()
                        .merge(chapter));
    }

    public List<Course> listCourses() {
        List<Course> courses = new ArrayList<>();
        courseRepository.findAll().forEach(courses::add);
        return courses;
    }

    public List<Translation> listTranslations() {
        List<Translation> translations = new ArrayList<>();
        translationRepository.findAll().forEach(translations::add);
        return translations;
    }

    public List<Translation> getTranslationsForTraining(Long configurationId) {
        return translationRepository.getTranslationsForTraining(configurationId);
    }

}
