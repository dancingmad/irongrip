package com.fiftyoneapps.irongrp.service.translation;

import com.fiftyoneapps.irongrp.service.translation.model.TranslationTagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class CleanupScheduler {

    @Autowired
    private TranslationTagRepository translationTagRepository;

    @Scheduled(fixedDelay = 60000)
    void removeUnusedTags() {
        translationTagRepository.deleteUnusedTags();
    }
}
