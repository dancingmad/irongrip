package com.irongrp.mnemotica.service.training.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.irongrp.mnemotica.service.translation.model.Translation;
import com.irongrp.mnemotica.service.user.model.User;
import org.neo4j.ogm.annotation.GeneratedValue;
import org.neo4j.ogm.annotation.Id;
import org.neo4j.ogm.annotation.NodeEntity;
import org.neo4j.ogm.annotation.Relationship;

import java.util.Date;
import java.util.List;

@NodeEntity
public class Training {

    @Id
    @GeneratedValue
    private Long id;

    private Date startedAt;
    private Date endedAt;

    @Relationship(type = "createdBy")
    private User createdBy;

    @Relationship(type = "configuration")
    private TrainingConfiguration configuration;

    @Relationship(type = "translations")
    private List<Translation> translations;

    @Relationship(type = "result")
    private TrainingResult result;


    public Long getId() {
        return id;
    }

    public Date getStartedAt() {
        return startedAt;
    }

    public void setStartedAt(Date startedAt) {
        this.startedAt = startedAt;
    }

    public Date getEndedAt() {
        return endedAt;
    }

    public void setEndedAt(Date endedAt) {
        this.endedAt = endedAt;
    }

    public User getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(User createdBy) {
        this.createdBy = createdBy;
    }

    public TrainingConfiguration getConfiguration() {
        return configuration;
    }

    public void setConfiguration(TrainingConfiguration configuration) {
        this.configuration = configuration;
    }

    @JsonIgnore
    public List<Translation> getTranslations() {
        return translations;
    }

    public void setTranslations(List<Translation> translations) {
        this.translations = translations;
    }

    public TrainingResult getResult() {
        return result;
    }

    public void setResult(TrainingResult result) {
        this.result = result;
    }
}
