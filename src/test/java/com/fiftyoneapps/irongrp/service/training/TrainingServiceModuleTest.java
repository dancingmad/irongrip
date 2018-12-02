package com.fiftyoneapps.irongrp.service.training;

import com.fiftyoneapps.irongrp.service.training.model.*;
import com.fiftyoneapps.irongrp.service.translation.Language;
import com.fiftyoneapps.irongrp.service.translation.TranslationService;
import com.fiftyoneapps.irongrp.service.translation.model.*;
import com.fiftyoneapps.irongrp.service.user.model.User;
import com.fiftyoneapps.irongrp.service.user.model.UserRepository;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import java.util.Arrays;
import java.util.Collections;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@RunWith(SpringRunner.class)
@SpringBootTest
@TestPropertySource(
        locations = "classpath:application-integrationtest.properties")
@Transactional
public class TrainingServiceModuleTest {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TranslationTagRepository tagRepository;

    @Autowired
    private TranslationService translationService;

    @Autowired
    private TrainingService trainingService;

    @Autowired
    private TranslationStatisticsService statisticsService;

    private User USER;
    private Course COURSE;
    private Chapter CHAPTER1;
    private Chapter CHAPTER2;

    @Before
    public void setUp() {
        USER = createTestUser();
        CHAPTER1 = createChapter(USER, "A1");
        CHAPTER2 = createChapter(USER, "A2");
        COURSE = new Course();
        COURSE.setName("Course A");
        COURSE.setLanguage(Language.ENGLISH);
        COURSE.setChapters(Arrays.asList(CHAPTER1, CHAPTER2));
        COURSE = translationService.saveCourse(COURSE);
    }

    @Test
    public void given_chaptersWithTranslationsAndTags_when_createTraining_expect_translationsAttachedToTraining() {

        TranslationTag tagVerb = createTag("verb");
        TranslationTag tagNoun = createTag("noun");
        TranslationTag tagSpecial = createTag("special");
        Translation translationA = createTranslation("noun A", tagNoun);
        Translation translationB = createTranslation("noun B", tagNoun, tagSpecial);
        Translation translationC = createTranslation("verb C", tagVerb);
        Translation translationD = createTranslation("verb D", tagVerb, tagSpecial);


        setTranslationsForChapter(CHAPTER1, translationA, translationB);
        setTranslationsForChapter(CHAPTER2, translationC, translationD);

        TrainingConfiguration configuration = new TrainingConfiguration();
        configuration.setChapters(Arrays.asList(CHAPTER1, CHAPTER2));
        configuration.setTags(Arrays.asList(tagVerb, tagSpecial));
        Training training = trainingService.createTraining(USER, configuration);
        Assert.assertEquals(3, training.getTranslations().size());
        Assert.assertTrue(training.getTranslations().contains(translationB));
        Assert.assertTrue(training.getTranslations().contains(translationC));
        Assert.assertTrue(training.getTranslations().contains(translationD));
    }

    @Test
    public void given_emptyTagCreated_when_getEmptyTag_expect_returnsSameTag() {
        TranslationTag tag = translationService.getEmptyTag();
        Assert.assertEquals(tag.getId(), translationService.getEmptyTag().getId());
    }

    @Test
    public void given_addedStatsToTranslation_when_addStatistics_expect_statisticsAdded() {
        Translation translation = createTranslation("My Translation");
        statisticsService.addStatistics(USER, translation);
        TranslationStatistics statistics = statisticsService.getStatistics(USER, translation.getId());
        Assert.assertNotNull(statistics);
    }

    @Test
    public void given_iterationTrainingAndRunStats_when_fetchNext_expect_translationsNotRunYet() {


        Translation translationA = createTranslation("stats A");
        Translation translationB = createTranslation("stats B");
        Translation translationC = createTranslation("stats C");
        Translation translationD = createTranslation("stats D");

        setTranslationsForChapter(CHAPTER1, translationA, translationB, translationC, translationD);

        TrainingConfiguration configuration = new TrainingConfiguration();
        configuration.setIterationsLimit(1);
        configuration.setIterationMode(true);
        configuration.setDirection(TranslationDirection.TO);
        configuration.setChapters(Collections.singletonList(CHAPTER1));

        Training training = trainingService.createTraining(USER, configuration);
        Assert.assertEquals(4, training.getTranslations().size());

        TranslationRun translationRunA = createTranslationRun(true, true);
        TranslationRun translationRunB = createTranslationRun(true, true);
        statisticsService.addTranslationRun(training, translationA.getId(), translationRunA);
        statisticsService.addTranslationRun(training, translationB.getId(), translationRunB);

        List<Translation> translations = statisticsService
                .fetchNextTranslationStatistics(training, 100)
                .stream().map(TranslationStatistics::getTranslation).collect(Collectors.toList());

        Assert.assertEquals(2, translations.size());
        Assert.assertTrue(translations.contains(translationC));
        Assert.assertTrue(translations.contains(translationD));
    }

    @Test
    public void given_translationRunsAlreadyExists_when_fetchNext_returnAllTranslations() {

        Translation translationA = createTranslation("stats A");
        Translation translationB = createTranslation("stats B");
        Translation translationC = createTranslation("stats C");
        Translation translationD = createTranslation("stats D");
        TrainingConfiguration configuration = new TrainingConfiguration();
        configuration.setIterationsLimit(1);
        configuration.setIterationMode(true);

        setTranslationsForChapter(CHAPTER1, translationA, translationB, translationC, translationD);
        configuration.setChapters(Arrays.asList(CHAPTER1));

        Training previousTraining = trainingService.createTraining(USER, configuration);
        // previousTraining.setTranslations(Arrays.asList(translationA, translationB, translationC, translationD));
        Assert.assertEquals(4, previousTraining.getTranslations().size());

        TranslationRun translationRunA = createTranslationRun(true, true);
        TranslationRun translationRunB = createTranslationRun(true, true);
        statisticsService.addTranslationRun(previousTraining, translationA.getId(), translationRunA);
        statisticsService.addTranslationRun(previousTraining, translationB.getId(), translationRunB);

        Assert.assertEquals(2, statisticsService
                .fetchNextTranslationStatistics(previousTraining, 100).size());


        Training training = trainingService.createTraining(USER, configuration);
        Assert.assertEquals(4, training.getTranslations().size());

        List<Translation> translations = statisticsService.fetchNextTranslationStatistics(training, 100)
                .stream().map(TranslationStatistics::getTranslation).collect(Collectors.toList());

        Assert.assertEquals(4, translations.size());
        Assert.assertTrue(translations.contains(translationA));
        Assert.assertTrue(translations.contains(translationB));
        Assert.assertTrue(translations.contains(translationC));
        Assert.assertTrue(translations.contains(translationD));
    }

    @Test
    public void given_twoTestRunsWithOneHit_when_closeTraining_thenAttachStatistics() {
        Translation translationA = createTranslation("stats A");
        Translation translationB = createTranslation("stats B");
        TrainingConfiguration configuration = new TrainingConfiguration();
        configuration.setIterationsLimit(1);
        configuration.setIterationMode(true);

        setTranslationsForChapter(CHAPTER1, translationA, translationB);
        configuration.setChapters(Arrays.asList(CHAPTER1));

        Training training = trainingService.createTraining(USER, configuration);
        statisticsService.addTranslationRun(training, translationA.getId(),
                createTranslationRun(true, true));
        statisticsService.addTranslationRun(training, translationB.getId(),
                createTranslationRun(true, false));
        training = trainingService.closeTraining(training.getId());
        Assert.assertEquals(50, training.getResult().getHitScore());
        Assert.assertEquals(1, training.getResult().getMinSkillTo());
        Assert.assertEquals(50, training.getResult().getSkillScoreTo());
        Assert.assertEquals(2, training.getResult().getRunCount());

    }

    private Translation createTranslation(String translationWord, TranslationTag... tags) {
        Translation translatesTo = new Translation();
        translatesTo.setTranslation(translationWord + "_translatesTo");
        Translation translation = new Translation();
        translation.setTranslation(translationWord);
        translation.setTranslatesTo(Collections.singletonList(translatesTo));
        translation.setTags(Arrays.stream(tags).collect(Collectors.toList()));
        return translationService.saveTranslation(translation);
    }


    private TranslationTag createTag(String name) {
        TranslationTag tag = new TranslationTag();
        tag.setName(name);
        return tagRepository.save(tag);
    }

    private Chapter createChapter(User user, String name) {
        Chapter chapter = new Chapter();
        chapter.setCreatedBy(user);
        chapter.setName(name);
        return chapter;
    }

    private void setTranslationsForChapter(Chapter chapter, Translation... translations) {
        chapter.setTranslations(Arrays.stream(translations).collect(Collectors.toList()));
        translationService.saveCourse(COURSE);
    }

    private User createTestUser() {
        User user = new User();
        user.setUsername("testUser");
        return userRepository.save(user);
    }

    private TranslationRun createTranslationRun(boolean directionTo, boolean hit) {
        TranslationRun translationRun = new TranslationRun();
        translationRun.setRunAt(new Date());
        translationRun.setDirectionTo(directionTo);
        translationRun.setHit(hit ? 1 : 0);
        return translationRun;
    }

}