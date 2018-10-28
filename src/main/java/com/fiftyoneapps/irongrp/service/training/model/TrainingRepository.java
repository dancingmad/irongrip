package com.fiftyoneapps.irongrp.service.training.model;

import org.springframework.data.neo4j.annotation.Query;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TrainingRepository extends Neo4jRepository<Training, Long> {
    @Query("MATCH (t:Training)-->(u:User) " +
            " WHERE id(u) = {userId} " +
            " RETURN id(t) ORDER BY t.startedAt desc LIMIT 5")
    List<Long> findLatestTrainings(@Param("userId") Long userId);
}
