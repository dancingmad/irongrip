package com.fiftyoneapps.irongrp.service.katwarning;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.neo4j.ogm.annotation.GeneratedValue;
import org.neo4j.ogm.annotation.Id;
import org.neo4j.ogm.annotation.NodeEntity;

@NodeEntity
@JsonIgnoreProperties(ignoreUnknown = true)
public class KatWarning {

    @GeneratedValue
    @Id
    private Long id;

    private String locationId;
    private String type;
    private Integer fromTime;
    private Integer toTime;
    private Float expectedWind;
    private Float currentWind;

    public Long getId() {
        return id;
    }

    public String getLocationId() {
        return locationId;
    }

    public void setLocationId(String locationId) {
        this.locationId = locationId;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Integer getFromTime() {
        return fromTime;
    }

    public void setFromTime(Integer fromTime) {
        this.fromTime = fromTime;
    }

    public Integer getToTime() {
        return toTime;
    }

    public void setToTime(Integer toTime) {
        this.toTime = toTime;
    }

    public Float getExpectedWind() {
        return expectedWind;
    }

    public void setExpectedWind(Float expectedWind) {
        this.expectedWind = expectedWind;
    }

    public Float getCurrentWind() {
        return currentWind;
    }

    public void setCurrentWind(Float currentWind) {
        this.currentWind = currentWind;
    }
}
