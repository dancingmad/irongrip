package com.fiftyoneapps.irongrp.service.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.neo4j.ogm.annotation.GeneratedValue;
import org.neo4j.ogm.annotation.Id;
import org.neo4j.ogm.annotation.NodeEntity;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@NodeEntity
@JsonIgnoreProperties(ignoreUnknown = true)
public class Hero {

    @Id
    @GeneratedValue
    private Long id;

    @NotEmpty
    private String name;

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
