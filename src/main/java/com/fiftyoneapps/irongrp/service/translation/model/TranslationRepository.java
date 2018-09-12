package com.fiftyoneapps.irongrp.service.translation.model;

import org.springframework.data.neo4j.annotation.Query;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TranslationRepository extends Neo4jRepository<Translation, Long> {

    @Query("MATCH (t:Translation) where not (t)<--() detach delete t")
    public void deleteUnusedTranslations();

    @Query("MATCH (config:TrainingConfiguration)-->(c:Chapter)-->(t:Translation)" +
            "-->(tag:TranslationTag)<--(config:TrainingConfiguration) " +
            "where id(config) = {configurationId} RETURN t")
    List<Translation> getTranslationsForTraining(@Param("configurationId") Long configurationId);
}
