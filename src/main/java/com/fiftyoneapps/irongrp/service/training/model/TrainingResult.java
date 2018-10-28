package com.fiftyoneapps.irongrp.service.training.model;

import org.neo4j.ogm.annotation.GeneratedValue;
import org.neo4j.ogm.annotation.Id;
import org.neo4j.ogm.annotation.NodeEntity;

@NodeEntity
public class TrainingResult {

    @Id
    @GeneratedValue
    private Long id;

    private int runCount;
    private int hitScore;

    private int minSkillFrom;
    private int minSkillTo;
    private int skillScoreFrom;
    private int skillScoreTo;

    public Long getId() {
        return id;
    }

    public int getRunCount() {
        return runCount;
    }

    public void setRunCount(int runCount) {
        this.runCount = runCount;
    }

    public int getHitScore() {
        return hitScore;
    }

    public void setHitScore(int hitScore) {
        this.hitScore = hitScore;
    }

    public int getMinSkillFrom() {
        return minSkillFrom;
    }

    public void setMinSkillFrom(int minSkillFrom) {
        this.minSkillFrom = minSkillFrom;
    }

    public int getMinSkillTo() {
        return minSkillTo;
    }

    public void setMinSkillTo(int minSkillTo) {
        this.minSkillTo = minSkillTo;
    }

    public int getSkillScoreFrom() {
        return skillScoreFrom;
    }

    public void setSkillScoreFrom(int skillScoreFrom) {
        this.skillScoreFrom = skillScoreFrom;
    }

    public int getSkillScoreTo() {
        return skillScoreTo;
    }

    public void setSkillScoreTo(int skillScoreTo) {
        this.skillScoreTo = skillScoreTo;
    }
}
