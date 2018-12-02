package com.irongrp.mnemotica.service.translation;

import com.irongrp.mnemotica.service.translation.model.Translation;
import com.irongrp.mnemotica.service.translation.model.TranslationTag;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.neo4j.ogm.session.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.util.ReflectionTestUtils;
import org.springframework.transaction.annotation.Transactional;

@RunWith(SpringRunner.class)
@SpringBootTest
@TestPropertySource(
        locations = "classpath:application-integrationtest.properties")
@Transactional
public class TranslationServiceModuleTest {

    @Autowired
    private Session session;

    @Autowired
    private TranslationService translationService;

    @Test
    public void testRemoveTagsWithUpdate() throws Exception {
        Translation translation = new Translation();
        translation.setTranslation("TEST");
        TranslationTag tag = new TranslationTag();
        tag.setName("TESTTAG");
        translation.getTags().add(tag);
        Translation persistedTranslation = translationService.saveTranslation(translation);
        Long id = persistedTranslation.getId();
        Assert.assertNotNull(id);
        persistedTranslation = translationService.getTranslation(id).get();
        Assert.assertEquals(1, persistedTranslation.getTags().size());

        Translation translationUpdate = new Translation();
        ReflectionTestUtils.setField(translationUpdate, "id", id);
        translationUpdate.setTranslation("TESTUPDATE");
        translationUpdate.setTags(null);
        translationService.updateTranslation(translationUpdate);

        persistedTranslation = translationService.getTranslation(id).get();
        Assert.assertEquals(persistedTranslation.getTranslation(), "TESTUPDATE");
        Assert.assertNull(persistedTranslation.getTags());
    }

}