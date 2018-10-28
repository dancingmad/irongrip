package com.fiftyoneapps.irongrp.service.translation.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fiftyoneapps.irongrp.service.translation.Language;
import com.fiftyoneapps.irongrp.service.user.model.User;
import org.neo4j.ogm.annotation.*;

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

    @Relationship(type = "translatesTo")
    private List<Translation> translatesTo;

    private String hint;

    @Relationship(type = "phrases")
    private List<Translation> phrases;

    @Relationship(type = "tags")
    private List<TranslationTag> tags;

    @Relationship(type = "createdBy")
    private User createdBy;

    @Relationship(type = "emptyTag")
    private TranslationTag emptyTag;

    @Transient
    private String iconUrl;

    public Translation() {
        this.phrases = new ArrayList<>();
        this.tags = new ArrayList<>();
    }

    public Long getId() {
        return id;
    }

    public List<TranslationTag> getTags() {
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

    public String getIconUrl() {
        return iconUrl;
    }

    public void setIconUrl(String iconUrl) {
        this.iconUrl = iconUrl;
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

    public TranslationTag getEmptyTag() {
        return emptyTag;
    }

    public void setEmptyTag(TranslationTag emptyTag) {
        this.emptyTag = emptyTag;
    }

    public Translation merge(Translation translation) {
        this.setTags(translation.getTags());
        this.setPhrases(translation.getPhrases());
        this.setTranslation(translation.getTranslation());
        this.setHint(translation.getHint());
        this.setTranslatesTo(translation.getTranslatesTo());
        return this;
    }
}
