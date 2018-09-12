package com.fiftyoneapps.irongrp.service.translation;

import com.fiftyoneapps.irongrp.service.translation.model.TranslationRepository;
import com.fiftyoneapps.irongrp.service.translation.model.TranslationTagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class CleanupScheduler {

    @Autowired
    private TranslationTagRepository translationTagRepository;

    @Autowired
    private TranslationRepository translationRepository;

    @Scheduled(fixedDelay = 60000)
    void removeUnusedTranslationsAndTags() {
        translationRepository.deleteUnusedTranslations();
        translationTagRepository.deleteUnusedTags();
    }
}
