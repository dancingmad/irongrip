package com.fiftyoneapps.irongrp.service.translation.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fiftyoneapps.irongrp.service.translation.Language;
import com.fiftyoneapps.irongrp.service.user.model.User;
import org.neo4j.ogm.annotation.GeneratedValue;
import org.neo4j.ogm.annotation.Id;
import org.neo4j.ogm.annotation.NodeEntity;
import org.neo4j.ogm.annotation.Relationship;

import java.util.ArrayList;
import java.util.List;

@NodeEntity
@JsonIgnoreProperties(ignoreUnknown = true)
public class Translation {

    @Id
    @GeneratedValue
    private Long id;

    private String translation;

    private Language language;

    @Relationship(type = "translates")
    private List<Translation> translatesTo;

    private String hint;

    @Relationship(type = "usedIn")
    private List<Translation> phrases;

    @Relationship(type = "tag")
    private List<TranslationTag> tags;

    @Relationship(type = "created_by")
    private User createdBy;

    public Long getId() {
        return id;
    }

    public List<TranslationTag> getTags() {
        if (tags == null) {
            tags = new ArrayList<>();
        }
        return tags;
    }

    public void setTags(List<TranslationTag> tags) {
        this.tags = tags;
    }

    public String getTranslation() {
        return translation;
    }

    public void setTranslation(String translation) {
        this.translation = translation;
    }

    public Language getLanguage() {
        return language;
    }

    public void setLanguage(Language language) {
        this.language = language;
    }

    public List<Translation> getTranslatesTo() {
        if (translatesTo == null) {
            translatesTo = new ArrayList<>();
        }
        return translatesTo;
    }

    public void setTranslatesTo(List<Translation> translatesTo) {
        this.translatesTo = translatesTo;
    }

    public String getHint() {
        return hint;
    }

    public void setHint(String hint) {
        this.hint = hint;
    }

    public List<Translation> getPhrases() {
        if (phrases == null) {
            phrases = new ArrayList<>();
        }
        return phrases;
    }

    public void setPhrases(List<Translation> phrases) {
        this.phrases = phrases;
    }

    public User getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(User createdBy) {
        this.createdBy = createdBy;
    }
}
