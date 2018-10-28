package com.fiftyoneapps.irongrp.service.training.model;

import org.neo4j.ogm.annotation.GeneratedValue;
import org.neo4j.ogm.annotation.Id;
import org.neo4j.ogm.annotation.NodeEntity;
import org.neo4j.ogm.annotation.Relationship;

import java.util.Date;

@NodeEntity
public class TranslationRun {

    @Id
    @GeneratedValue
    private Long id;

    private Date runAt;

    private int hit;

    private boolean directionTo;

    @Relationship(type = "training")
    private Training training;

    public Long getId() {
        return id;
    }

    public Date getRunAt() {
        return runAt;
    }

    public void setRunAt(Date runAt) {
        this.runAt = runAt;
    }

    public int getHit() {
        return hit;
    }

    public void setHit(int hit) {
        this.hit = hit;
    }

    public boolean isDirectionTo() {
        return directionTo;
    }

    public void setDirectionTo(boolean directionTo) {
        this.directionTo = directionTo;
    }

    public Training getTraining() {
        return training;
    }

    public void setTraining(Training training) {
        this.training = training;
    }
}
