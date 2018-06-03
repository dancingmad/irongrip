package com.fiftyoneapps.irongrp.service.translation.model;

import com.fiftyoneapps.irongrp.service.user.model.User;
import org.neo4j.ogm.annotation.GeneratedValue;
import org.neo4j.ogm.annotation.Id;
import org.neo4j.ogm.annotation.NodeEntity;
import org.neo4j.ogm.annotation.Relationship;

import java.util.ArrayList;
import java.util.List;

@NodeEntity
public class Course {

    @Id
    @GeneratedValue
    private Long id;

    private String name;

    @Relationship(type = "previous")
    private Course previousCourse;

    @Relationship(type = "next")
    private Course nextCourse;

    @Relationship(type = "contains")
    private List<Chapter> chapters;

    public List<Chapter> getChapters() {
        if (chapters == null) {
            chapters = new ArrayList<>();
        }
        return chapters;
    }

    public void setChapters(List<Chapter> chapters) {
        this.chapters = chapters;
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

    public Course getPreviousCourse() {
        return previousCourse;
    }

    public void setPreviousCourse(Course previousCourse) {
        this.previousCourse = previousCourse;
    }

    public Course getNextCourse() {
        return nextCourse;
    }

    public void setNextCourse(Course nextCourse) {
        this.nextCourse = nextCourse;
    }
}
