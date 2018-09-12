package com.fiftyoneapps.irongrp.service.training.model;

import com.fiftyoneapps.irongrp.service.translation.model.Translation;
import com.fiftyoneapps.irongrp.service.user.model.User;
import org.neo4j.ogm.annotation.GeneratedValue;
import org.neo4j.ogm.annotation.Id;
import org.neo4j.ogm.annotation.NodeEntity;
import org.neo4j.ogm.annotation.Relationship;

import java.util.List;

@NodeEntity
public class TranslationStatistics {

    @Id
    @GeneratedValue
    private Long id;

    @Relationship(type = "createdBy")
    private User user;

    @Relationship(type = "refers")
    private Translation translation;

    @Relationship(type = "contains")
    private List<TranslationRun> runs;

    private int skillLevelFrom;
    private int skillLevelTo;


    public Long getId() {
        return id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Translation getTranslation() {
        return translation;
    }

    public void setTranslation(Translation translation) {
        this.translation = translation;
    }

    public List<TranslationRun> getRuns() {
        return runs;
    }

    public void setRuns(List<TranslationRun> runs) {
        this.runs = runs;
    }

    public int getSkillLevelFrom() {
        return skillLevelFrom;
    }

    public void setSkillLevelFrom(int skillLevelFrom) {
        this.skillLevelFrom = skillLevelFrom;
    }

    public int getSkillLevelTo() {
        return skillLevelTo;
    }

    public void setSkillLevelTo(int skillLevelTo) {
        this.skillLevelTo = skillLevelTo;
    }
}
