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
public class Course {

    @Id
    @GeneratedValue
    private Long id;

    private String name;

    private Language language;

    @Relationship(type = "chapters")
    private List<Chapter> chapters;

    @Relationship(type = "createdBy")
    private User createdBy;

    public List<Chapter> getChapters() {
        if (chapters == null) {
            chapters = new ArrayList<>();
        }
        return chapters;
    }

    public void setChapters(List<Chapter> chapters) {
        this.chapters = chapters;
    }

    public Language getLanguage() {
        return language;
    }

    public void setLanguage(Language language) {
        this.language = language;
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

    public User getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(User createdBy) {
        this.createdBy = createdBy;
    }

    public Course merge(Course course) {
        this.chapters = course.chapters;
        this.language = course.language;
        this.name = course.name;
        return this;
    }
}
