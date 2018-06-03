package com.fiftyoneapps.irongrp.service.translation.model;

import org.neo4j.ogm.annotation.GeneratedValue;
import org.neo4j.ogm.annotation.Id;
import org.neo4j.ogm.annotation.NodeEntity;
import org.neo4j.ogm.annotation.Relationship;

@NodeEntity
public class Lession {

    @Id
    @GeneratedValue
    private Long id;

    private String name;

    @Relationship
    private Lession previousLesson;

    @Relationship
    private Lession nextLession;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Lession getPreviousLesson() {
        return previousLesson;
    }

    public void setPreviousLesson(Lession previousLesson) {
        this.previousLesson = previousLesson;
    }

    public Lession getNextLession() {
        return nextLession;
    }

    public void setNextLession(Lession nextLession) {
        this.nextLession = nextLession;
    }
}
