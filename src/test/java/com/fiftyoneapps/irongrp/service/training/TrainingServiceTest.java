package com.fiftyoneapps.irongrp.service.training;

import com.fiftyoneapps.irongrp.service.training.model.*;
import com.fiftyoneapps.irongrp.service.translation.model.Translation;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.test.util.ReflectionTestUtils;

import java.util.Arrays;
import java.util.List;

import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
public class TrainingServiceTest {

    @Mock
    private TranslationStatisticsRepository statisticsRepository;

    @InjectMocks
    private TranslationStatisticsService statisticsService;


    @Test
    public void fetchNextTranslations() throws Exception {
        Training training = createTraining(TranslationDirection.TO);
        TranslationStatistics stat1 = createStats(100L, 2); // 2
        TranslationStatistics stat2 = createStats(200L, 1); // 1
        TranslationStatistics stat3 = createStats(300L, 3); // 3
        TranslationStatistics stat4 = createStats(400L, 1); // 1
        TranslationStatistics stat5 = createStats(500L, 2); // 2
        TranslationStatistics stat6 = createStats(600L, 1); // 1
        TranslationStatistics stat7 = createStats(700L, 4); // 4
        TranslationStatistics stat8 = createStats(800L, 1); // 1
        TranslationStatistics stat9 = createStats(900L, 1); // 2
        TranslationStatistics stat10 = createStats(1000L, 2); // 3
        TranslationStatistics stat11 = createStats(1100L, 4);
        TranslationStatistics stat12 = createStats(1200L, 3);
        TranslationStatistics stat13 = createStats(1300L, 1); // 5
        TranslationStatistics stat14 = createStats(1400L, 3);
        TranslationStatistics stat15 = createStats(1500L, 1);


        when(statisticsRepository.findNextTranslationsForSkill(training.getId())).thenReturn(
                Arrays.asList(stat1, stat2, stat3, stat4, stat5, stat6,
                        stat7, stat8, stat9, stat10, stat11, stat12, stat13, stat14, stat15)
        );

        List<TranslationStatistics> skillTranslations =
                statisticsService.fetchNextTranslationStatistics(training, 11);

        Assert.assertEquals(11, skillTranslations.size());

        List<TranslationStatistics> expectedStatsResult =
                Arrays.asList(stat2, stat4, stat6, stat8, // 4*1
                        stat1, stat5, stat9, //3*2
                        stat3, stat10, //2*3
                        stat7, // 1*4
                        stat13); // ...

        skillTranslations.removeAll(expectedStatsResult);
        Assert.assertTrue("remaining " + skillTranslations.size() + " expected to be empty!", skillTranslations.isEmpty());
    }

    private Training createTraining(TranslationDirection direction) {
        Training training = new Training();
        ReflectionTestUtils.setField(training, "id", 111L);
        TrainingConfiguration configuration = new TrainingConfiguration();
        configuration.setDirection(direction);
        training.setConfiguration(configuration);
        return training;
    }

    private TranslationStatistics createStats(Long id, int skillLevelTo) {
        TranslationStatistics stats = new TranslationStatistics();
        ReflectionTestUtils.setField(stats, "id", id);
        Translation translation = new Translation();
        stats.setTranslation(translation);
        stats.setSkillLevelTo(skillLevelTo);
        stats.setSkillLevelFrom(0);
        return stats;
    }

}