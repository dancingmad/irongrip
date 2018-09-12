package com.fiftyoneapps.irongrp.service.training;

import com.fiftyoneapps.irongrp.service.training.model.Training;
import com.fiftyoneapps.irongrp.service.training.model.TrainingConfiguration;
import com.fiftyoneapps.irongrp.service.training.model.TrainingRepository;
import com.fiftyoneapps.irongrp.service.translation.model.*;
import com.fiftyoneapps.irongrp.service.user.model.User;
import com.fiftyoneapps.irongrp.service.user.model.UserRepository;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import java.util.Arrays;
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
    private ChapterRepository chapterRepository;

    @Autowired
    private TranslationTagRepository translationTagRepository;


    @Autowired
    private TranslationRepository translationRepository;

    @Autowired
    private TrainingRepository trainingRepository;

    @Autowired
    private TrainingService trainingService;

    @Test
    public void given_chaptersWithTranslationsAndTags_when_createTraining_expect_translationsAttachedToTraining() {
        User user = createTestUser();
        TranslationTag tagVerb = createTag("verb");
        TranslationTag tagNoun = createTag("noun");
        TranslationTag tagSpecial = createTag("special");
        Translation translationA = createTranslation("noun A", tagNoun);
        Translation translationB = createTranslation("noun B", tagNoun, tagSpecial);
        Translation translationC = createTranslation("verb C", tagVerb);
        Translation translationD = createTranslation("verb D", tagVerb, tagSpecial);
        Chapter a1 = createChapter(user, "A1", translationA, translationB);
        Chapter a2 = createChapter(user, "A2", translationC, translationD);
        TrainingConfiguration configuration = new TrainingConfiguration();
        configuration.setChapters(Arrays.asList(a1, a2));
        configuration.setTags(Arrays.asList(tagVerb, tagSpecial));
        Training training = trainingService.createTraining(user, configuration);
        Assert.assertEquals(3, training.getTranslations().size());
        Assert.assertTrue(training.getTranslations().contains(translationB));
        Assert.assertTrue(training.getTranslations().contains(translationC));
        Assert.assertTrue(training.getTranslations().contains(translationD));
    }

    @Test
    public void given_iterationTrainingAndRunStats_when_fetchNext_expect_translationsNotRunYet() {
        User user = createTestUser();

        Translation translationA = createTranslation("stats A");
        Translation translationB = createTranslation("stats B");
        Translation translationC = createTranslation("stats C");
        Translation translationD = createTranslation("stats D");
        TrainingConfiguration configuration = new TrainingConfiguration();
        configuration.setLimitIterations(1);
        configuration.setIterationMode(true);

        Training training = new Training();
        training.setTranslations(Arrays.asList(translationA, translationB, translationC, translationD));
        training.setCreatedBy(user);
        training.setConfiguration(configuration);
        training.setStartedAt(new Date());
        trainingRepository.save(training);
        trainingService.addTranslationRun(user, training, translationA, true, true);
        trainingService.addTranslationRun(user, training, translationB, true, true);

        List<Translation> translations = trainingService.fetchNextTranslations(training);

        Assert.assertEquals(2, translations.size());
        Assert.assertTrue(translations.contains(translationC));
        Assert.assertTrue(translations.contains(translationD));
    }

    @Test
    public void given_translationRunsAlreadyExists_when_fetchNext_returnAllTranslations() {
        User user = createTestUser();

        Translation translationA = createTranslation("stats A");
        Translation translationB = createTranslation("stats B");
        Translation translationC = createTranslation("stats C");
        Translation translationD = createTranslation("stats D");
        TrainingConfiguration configuration = new TrainingConfiguration();
        configuration.setLimitIterations(1);
        configuration.setIterationMode(true);

        Training previousTraining = new Training();
        previousTraining.setTranslations(Arrays.asList(translationA, translationB, translationC, translationD));
        previousTraining.setCreatedBy(user);
        previousTraining.setConfiguration(configuration);
        previousTraining.setStartedAt(new Date());
        trainingRepository.save(previousTraining);
        trainingService.addTranslationRun(user, previousTraining, translationA, true, true);
        trainingService.addTranslationRun(user, previousTraining, translationB, true, true);

        Assert.assertEquals(2, trainingService.fetchNextTranslations(previousTraining).size());

        Training training = new Training();
        training.setTranslations(Arrays.asList(translationA, translationB, translationC, translationD));
        training.setCreatedBy(user);
        training.setConfiguration(configuration);
        training.setStartedAt(new Date());
        trainingRepository.save(training);

        List<Translation> translations = trainingService.fetchNextTranslations(training);

        Assert.assertEquals(4, translations.size());
        Assert.assertTrue(translations.contains(translationA));
        Assert.assertTrue(translations.contains(translationB));
        Assert.assertTrue(translations.contains(translationC));
        Assert.assertTrue(translations.contains(translationD));
    }

    private Translation createTranslation(String translationWord, TranslationTag... tags) {
        Translation translation = new Translation();
        translation.setTranslation(translationWord);
        translation.setTags(Arrays.stream(tags).collect(Collectors.toList()));
        return translationRepository.save(translation);
    }


    private TranslationTag createTag(String name) {
        TranslationTag tag = new TranslationTag();
        tag.setName(name);
        return translationTagRepository.save(tag);
    }

    private Chapter createChapter(User user, String name, Translation... translationList) {
        Chapter chapter = new Chapter();
        chapter.setCreatedBy(user);
        chapter.setName(name);
        chapter.setTranslations(Arrays.stream(translationList).collect(Collectors.toList()));
        return chapterRepository.save(chapter);
    }

    private User createTestUser() {
        User user = new User();
        user.setUsername("testUser");
        return userRepository.save(user);
    }

}