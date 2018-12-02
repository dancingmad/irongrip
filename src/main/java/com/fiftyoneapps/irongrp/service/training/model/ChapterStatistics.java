package com.fiftyoneapps.irongrp.service.training.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fiftyoneapps.irongrp.service.translation.model.Chapter;
import com.fiftyoneapps.irongrp.service.user.model.User;
import org.neo4j.ogm.annotation.GeneratedValue;
import org.neo4j.ogm.annotation.Id;
import org.neo4j.ogm.annotation.NodeEntity;
import org.neo4j.ogm.annotation.Relationship;

@NodeEntity
public class ChapterStatistics {
    @Id
    @GeneratedValue
    private Long id;

    @Relationship(type = "chapter")
    private Chapter chapter;

    // between 0 and 300
    // 100 = all words at least at skill level 2 or at least 50% at skill level 3
    // 200 = all words at least at skill level 3 or at least 50% at skill level 4
    // 300 = all words at least at skill level 4
    private int chapterScoreTo;
    private int chapterScoreFrom;


    @Relationship(type = "createdBy")
    private User createdBy;

    public Long getId() {
        return id;
    }

    @JsonIgnore
    public Chapter getChapter() {
        return chapter;
    }

    public void setChapter(Chapter chapter) {
        this.chapter = chapter;
    }

    public int getChapterScoreTo() {
        return chapterScoreTo;
    }

    public void setChapterScoreTo(int chapterScoreTo) {
        this.chapterScoreTo = chapterScoreTo;
    }

    @JsonIgnore
    public User getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(User createdBy) {
        this.createdBy = createdBy;
    }

    public int getChapterScoreFrom() {
        return chapterScoreFrom;
    }

    public void setChapterScoreFrom(int chapterScoreFrom) {
        this.chapterScoreFrom = chapterScoreFrom;
    }
}
