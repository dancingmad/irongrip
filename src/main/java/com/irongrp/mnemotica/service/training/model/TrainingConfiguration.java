package com.irongrp.mnemotica.service.training.model;

import com.irongrp.mnemotica.service.translation.Language;
import com.irongrp.mnemotica.service.translation.model.Chapter;
import com.irongrp.mnemotica.service.translation.model.Course;
import com.irongrp.mnemotica.service.translation.model.TranslationTag;
import org.neo4j.ogm.annotation.GeneratedValue;
import org.neo4j.ogm.annotation.Id;
import org.neo4j.ogm.annotation.NodeEntity;
import org.neo4j.ogm.annotation.Relationship;

import java.util.List;

@NodeEntity
public class TrainingConfiguration {

    @Id
    @GeneratedValue
    private Long id;

    @Relationship(type = "chapters")
    private List<Chapter> chapters;

    private TranslationDirection direction;

    private boolean hintEnabled;

    @Relationship(type = "tags")
    private List<TranslationTag> tags;

    private Language toLanguage;

    private boolean iterationMode;

    // for iteration mode just iterate over the translations, not considering skill levels
    private int iterationsLimit;

    // for non-iteration mode both time and skill limit can be configured
    private int skillLevelLimit;
    private boolean useOverallSkillLevel;

    @Relationship(type = "course")
    private Course course;

    public Long getId() {
        return id;
    }

    public List<Chapter> getChapters() {
        return chapters;
    }

    public void setChapters(List<Chapter> chapters) {
        this.chapters = chapters;
    }

    public TranslationDirection getDirection() {
        return direction;
    }

    public void setDirection(TranslationDirection direction) {
        this.direction = direction;
    }

    public boolean isHintEnabled() {
        return hintEnabled;
    }

    public void setHintEnabled(boolean hintEnabled) {
        this.hintEnabled = hintEnabled;
    }

    public List<TranslationTag> getTags() {
        return tags;
    }

    public void setTags(List<TranslationTag> tags) {
        this.tags = tags;
    }

    public Language getToLanguage() {
        return toLanguage;
    }

    public void setToLanguage(Language toLanguage) {
        this.toLanguage = toLanguage;
    }

    public boolean isIterationMode() {
        return iterationMode;
    }

    public void setIterationMode(boolean iterationMode) {
        this.iterationMode = iterationMode;
    }

    public int getIterationsLimit() {
        return iterationsLimit;
    }

    public void setIterationsLimit(int iterationsLimit) {
        this.iterationsLimit = iterationsLimit;
    }

    public int getSkillLevelLimit() {
        return skillLevelLimit;
    }

    public void setSkillLevelLimit(int skillLevelLimit) {
        this.skillLevelLimit = skillLevelLimit;
    }

    public boolean isUseOverallSkillLevel() {
        return useOverallSkillLevel;
    }

    public void setUseOverallSkillLevel(boolean useOverallSkillLevel) {
        this.useOverallSkillLevel = useOverallSkillLevel;
    }

    public Course getCourse() {
        return course;
    }

    public void setCourse(Course course) {
        this.course = course;
    }
}
