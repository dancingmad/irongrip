package com.irongrp.mnemotica.service.training;

import com.irongrp.mnemotica.service.user.model.User;
import com.irongrp.mnemotica.service.user.model.UserRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

@RunWith(SpringRunner.class)
@SpringBootTest
@TestPropertySource(
        locations = "classpath:application-integrationtest.properties")
@Transactional
public class TranslationStatisticsServiceModuleTest {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TranslationStatisticsService statisticsService;

    @Test
    public void getStatisticsList() throws Exception {
        User user = createTestUser();
        statisticsService.getStatisticsList(user, 100);
    }

    private User createTestUser() {
        User user = new User();
        user.setUsername("testUser");
        return userRepository.save(user);
    }

}