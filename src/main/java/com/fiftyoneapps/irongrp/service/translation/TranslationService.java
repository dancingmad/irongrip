package com.fiftyoneapps.irongrp.service.translation;

import com.fiftyoneapps.irongrp.service.translation.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class TranslationService {

    @Autowired
    private CourseRepository courseRepository;
    @Autowired
    private ChapterRepository chapterRepository;
    @Autowired
    private TranslationRepository translationRepository;
    @Autowired
    private TranslationTagRepository translationTagRepository;

    public Course saveCourse(Course course) {
        return courseRepository.save(course);
    }

    public void saveChapter(Chapter chapter) {
        chapterRepository.save(chapter);
    }

    public Chapter addChapter(Chapter chapter) {
        if (chapter.getId() != null) {
            return chapter;
        }
        if (chapter.getCourse() == null) {
            throw new RuntimeException("missing Course for chapter");
        }
        chapter = chapterRepository.save(chapter);
        Course course = courseRepository
                .findById(chapter.getCourse().getId()).get();
        course.getChapters().add(chapter);
        return chapter;
    }

    public Translation saveTranslation(Translation translation) {
        return translationRepository.save(translation);
    }

    public TranslationTag saveTag(TranslationTag tag) {
        return translationTagRepository.save(tag);
    }

    public List<TranslationTag> listTags() {
        List<TranslationTag> translationTags = new ArrayList<>();
        translationTagRepository.findAll().forEach(translationTags::add);
        return translationTags;
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

    public void deleteChapter(Long id) {
        Optional<Chapter> optionalChapter = chapterRepository.findById(id);
        if (!optionalChapter.isPresent()) {
            throw new RuntimeException("Chapter with id "+id+" does not exist");
        }
        Chapter chapter = optionalChapter.get();
        if (chapter.getCourse() != null) {
            Course course = chapter.getCourse();
            if (course.getChapters() != null) {
                course.getChapters().remove(chapter);
                courseRepository.save(course);
            }
        }
        chapterRepository.delete(chapter);
    }

    public void deleteCourse(Long id) {
        Course course = courseRepository.findById(id).get();
        course.getChapters().forEach(chapterRepository::delete);
        courseRepository.delete(course);
    }


    public List<Course> listCourses() {
        List<Course> courses = new ArrayList<>();
        courseRepository.findAll().forEach(courses::add);
        return courses;
    }


}
