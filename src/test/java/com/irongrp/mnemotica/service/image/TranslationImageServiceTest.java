package com.irongrp.mnemotica.service.image;

import com.irongrp.mnemotica.service.translation.model.Translation;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.junit.MockitoJUnitRunner;

import java.util.Collections;

@RunWith(MockitoJUnitRunner.class)
public class TranslationImageServiceTest {

    @InjectMocks
    private TranslationImageService translationImageService;

    @Test
    public void given_translationRed_when_getImagePathForTranslation_then_returnRedCarImage() throws Exception {
        translationImageService.initializeFileNames();
        Translation translation = new Translation();
        translation.setTranslation("red");
        String imagePath = translationImageService.getImagePathForTranslation(translation);
        Assert.assertEquals(TranslationImageService.IMAGE_PATH + "/car_red_vehicle.png", imagePath);
    }

    @Test
    public void given_translationTranslatesToCar_when_getImagePathForTranslation_then_returnRedCarImage() throws Exception {
        translationImageService.initializeFileNames();
        Translation translatesTo = new Translation();
        translatesTo.setTranslation("car");
        Translation translation = new Translation();
        translation.setTranslation("nothing");
        translation.setTranslatesTo(Collections.singletonList(translatesTo));
        String imagePath = translationImageService.getImagePathForTranslation(translation);
        Assert.assertEquals(TranslationImageService.IMAGE_PATH + "/car_red_vehicle.png", imagePath);
    }

}