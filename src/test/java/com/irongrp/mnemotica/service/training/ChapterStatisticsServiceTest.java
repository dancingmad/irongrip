package com.irongrp.mnemotica.service.training;

import com.irongrp.mnemotica.service.training.model.*;
import com.irongrp.mnemotica.service.translation.TranslationService;
import com.irongrp.mnemotica.service.translation.model.Chapter;
import com.irongrp.mnemotica.service.translation.model.Translation;
import com.irongrp.mnemotica.service.user.model.User;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.test.util.ReflectionTestUtils;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@RunWith(MockitoJUnitRunner.class)
public class ChapterStatisticsServiceTest {

    private User DEFAULT_USER = createDefaultUser();

    @Mock
    private TranslationService translationService;

    @Mock
    private TranslationStatisticsService statisticsService;

    @Mock
    private ChapterStatisticsRepository chapterStatisticsRepository;

    @InjectMocks
    private ChapterStatisticsService chapterStatisticsService;

    @Test
    public void given_MultipleChaptersWithMultipleTranslations_when_updateChapterStatistics_then_expectScore200()
            throws Exception {
        Translation translationOne = createTranslation(111L, 1, 1);
        Translation translationTwo = createTranslation(222L, 2, 2);
        Translation translationThree = createTranslation(333L, 3, 3);
        Translation translationFour = createTranslation(444L, 4, 4);
        ChapterStatistics chapterOne = createChapterStatistics(100L,
                Arrays.asList(translationOne, translationTwo));
        ChapterStatistics chapterTwo = createChapterStatistics(200L,
                Arrays.asList(translationThree, translationFour));
        Training training = createTraining(Arrays.asList(chapterOne.getChapter(), chapterTwo.getChapter()));
        chapterStatisticsService.updateChapterStatistics(training);

        Assert.assertEquals(0, chapterOne.getChapterScoreFrom());
        Assert.assertEquals(0, chapterOne.getChapterScoreTo());
        Assert.assertEquals(200, chapterTwo.getChapterScoreFrom());
        Assert.assertEquals(200, chapterTwo.getChapterScoreTo());
    }

    @Test
    public void given_twoAtLeastAtLevel3_when_updateChapterStatistics_then_expectScore100()
            throws Exception {
        Translation translationOne = createTranslation(111L, 1, 1);
        Translation translationTwo = createTranslation(222L, 2, 2);
        Translation translationThree = createTranslation(333L, 3, 3);
        Translation translationFour = createTranslation(444L, 4, 4);
        ChapterStatistics chapterStat = createChapterStatistics(100L,
                Arrays.asList(translationOne, translationTwo, translationThree, translationFour));
        Training training = createTraining(Collections.singletonList(chapterStat.getChapter()));

        chapterStatisticsService.updateChapterStatistics(training);

        Assert.assertEquals(100, chapterStat.getChapterScoreFrom());
        Assert.assertEquals(100, chapterStat.getChapterScoreTo());
    }

    private Translation createTranslation(Long id, int skillFrom, int skillTo) {
        Translation translation = new Translation();
        ReflectionTestUtils.setField(translation, "id", id);
        TranslationStatistics translationStatistics = new TranslationStatistics();
        translationStatistics.setSkillLevelFrom(skillFrom);
        translationStatistics.setSkillLevelTo(skillTo);
        ReflectionTestUtils.setField(translationStatistics, "id", id);
        Mockito.when(statisticsService.getStatistics(DEFAULT_USER, id))
                .thenReturn(translationStatistics);
        return translation;
    }

    private ChapterStatistics createChapterStatistics(Long chapterStatId, List<Translation> translations) {
        Chapter chapter = new Chapter();
        chapter.setTranslations(translations);
        ReflectionTestUtils.setField(chapter, "id", chapterStatId + 99000);

        ChapterStatistics chapterStatistics = new ChapterStatistics();
        ReflectionTestUtils.setField(chapterStatistics, "id", chapterStatId);
        chapterStatistics.setChapter(chapter);
        Mockito.when(chapterStatisticsRepository.findByUserAndChapter(DEFAULT_USER.getId(), chapter.getId()))
                .thenReturn(chapterStatistics);
        return chapterStatistics;
    }

    private Training createTraining(List<Chapter> chapters) {
        TrainingConfiguration configuration = new TrainingConfiguration();
        configuration.setChapters(chapters);
        Training training = new Training();
        training.setConfiguration(configuration);
        training.setCreatedBy(DEFAULT_USER);
        return training;
    }

    private User createDefaultUser() {
        User user = new User();
        ReflectionTestUtils.setField(user, "id", 111L);
        return user;
    }

}