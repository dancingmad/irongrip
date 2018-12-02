package com.irongrp.mnemotica.service.translation.model;

import org.springframework.data.neo4j.annotation.Query;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TranslationRepository extends Neo4jRepository<Translation, Long> {

    @Query("MATCH (t:Translation)-->(u:User) where not (t)<--() and id(u)={userId} detach delete t")
    void deleteUnusedTranslations(@Param("userId") Long userId);

    @Query("MATCH (config:TrainingConfiguration)-->(c:Chapter)-->(t:Translation)" +
            " MATCH (t)-->(tag:TranslationTag)<--(config)" +
            " WHERE id(config) = {configurationId}" +
            " RETURN t")
    List<Translation> getTranslationsForTraining(@Param("configurationId") Long configurationId);

}
