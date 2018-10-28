package com.fiftyoneapps.irongrp.service.training.model;

import org.springframework.data.neo4j.annotation.QueryResult;

@QueryResult
public class TrainingStatistics {

    private int runCount;
    private int hitCount;
    private double avgSkillLevelTo;
    private double avgSkillLevelFrom;
    private int minSkillLevelTo;
    private int minSkillLevelFrom;

    public int getRunCount() {
        return runCount;
    }

    public int getHitCount() {
        return hitCount;
    }

    public double getAvgSkillLevelTo() {
        return avgSkillLevelTo;
    }

    public double getAvgSkillLevelFrom() {
        return avgSkillLevelFrom;
    }

    public int getMinSkillLevelTo() {
        return minSkillLevelTo;
    }

    public int getMinSkillLevelFrom() {
        return minSkillLevelFrom;
    }
}
