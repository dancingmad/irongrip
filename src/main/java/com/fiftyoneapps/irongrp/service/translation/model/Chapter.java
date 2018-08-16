package com.fiftyoneapps.irongrp.service.translation.model;

import com.fiftyoneapps.irongrp.service.user.model.User;
import org.neo4j.ogm.annotation.GeneratedValue;
import org.neo4j.ogm.annotation.Id;
import org.neo4j.ogm.annotation.NodeEntity;
import org.neo4j.ogm.annotation.Relationship;

import java.util.ArrayList;
import java.util.List;

@NodeEntity
public class Chapter {

    @Id
    @GeneratedValue
    private Long id;

    private String name;

    @Relationship(type = "contains")

    private List<Translation> translations;

    @Relationship(type = "previous")
    private Chapter previous;

    @Relationship(type = "next")
    private Chapter next;

    @Relationship(type = "created_by")
    private User createdBy;

    public User getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(User createdBy) {
        this.createdBy = createdBy;
    }

    public Long getId() {
        return id;
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

    public void setTranslations(List<Translation> translations) {
        this.translations = translations;
    }

    public Chapter getPrevious() {
        return previous;
    }

    public void setPrevious(Chapter previous) {
        this.previous = previous;
    }

    public Chapter getNext() {
        return next;
    }

    public void setNext(Chapter next) {
        this.next = next;
    }
}
