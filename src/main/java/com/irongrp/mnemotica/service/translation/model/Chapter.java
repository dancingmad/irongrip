package com.irongrp.mnemotica.service.translation.model;

import com.irongrp.mnemotica.service.training.model.ChapterStatistics;
import com.irongrp.mnemotica.service.user.model.User;
import org.neo4j.ogm.annotation.GeneratedValue;
import org.neo4j.ogm.annotation.Id;
import org.neo4j.ogm.annotation.NodeEntity;
import org.neo4j.ogm.annotation.Relationship;
import org.springframework.data.annotation.Transient;

import java.util.ArrayList;
import java.util.List;

@NodeEntity
public class Chapter {

    @Id
    @GeneratedValue
    private Long id;

    private String name;

    @Relationship(type = "translations")
    private List<Translation> translations;

    private int index;

    @Relationship(type = "createdBy")
    private User createdBy;

    @Transient
    private ChapterStatistics chapterStatistics;

    public User getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(User createdBy) {
        this.createdBy = createdBy;
    }

    public Long getId() {
        return id;
    }

    public int getIndex() {
        return index;
    }

    public void setIndex(int index) {
        this.index = index;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Translation> getTranslations() {
        if (translations == null) {
            return new ArrayList<>();
        }
        return translations;
    }

    public ChapterStatistics getChapterStatistics() {
        return chapterStatistics;
    }

    public void setChapterStatistics(ChapterStatistics chapterStatistics) {
        this.chapterStatistics = chapterStatistics;
    }

    public void setTranslations(List<Translation> translations) {
        this.translations = translations;
    }

    public Chapter merge(Chapter chapter) {
        this.translations = chapter.translations;
        this.name = chapter.name;
        return this;
    }


}
