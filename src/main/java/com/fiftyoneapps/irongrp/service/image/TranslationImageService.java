package com.fiftyoneapps.irongrp.service.image;

import com.fiftyoneapps.irongrp.service.translation.model.Translation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.core.io.support.ResourcePatternResolver;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class TranslationImageService {

    private static final Logger LOGGER = LoggerFactory.getLogger(TranslationImageService.class);

    private static final String INTERNAL_IMAGE_PATH = "static/icons";
    static final String IMAGE_PATH = "/icons";

    private static Pattern pattern = Pattern.compile("((?<tag>[a-z]+)[\\_\\.])");
    private static Map<String, List<String>> fileNameMap = new HashMap<>();

    @PostConstruct
    void initializeFileNames() throws IOException {
        ResourcePatternResolver resourceResolver = new PathMatchingResourcePatternResolver();
        Resource[] resources = resourceResolver.getResources("classpath*:" + INTERNAL_IMAGE_PATH + "/*.png");
        Arrays.stream(resources).forEach(this::addResource);
    }

    private void addResource(Resource resource) {
        String fileName = resource.getFilename();

        Matcher matcher = pattern.matcher(fileName);
        while (matcher.find()) {
            String tagName = matcher.group("tag");
            List<String> fileNames = fileNameMap.get(tagName);
            if (fileNames == null) {
                fileNames = new ArrayList<>();
            }
            fileNames.add(fileName);
            fileNameMap.put(tagName.toLowerCase(), fileNames);
        }
    }

    public String getImagePathForTranslation(Translation translation) {
        String fileName = getFileNameForTranslation(translation);
        if (fileName != null) {
            return fileName;
        }
        return translation.getTranslatesTo().stream()
                .map(this::getFileNameForTranslation)
                .filter(Objects::nonNull)
                .findFirst().orElse("");
    }

    private String getFileNameForTranslation(Translation translation) {
        List<String> fileNames = fileNameMap.get(translation.getTranslation().toLowerCase());
        if (CollectionUtils.isEmpty(fileNames)) {
            return null;
        }
        return IMAGE_PATH + "/" + fileNames.get(0);
    }

}
