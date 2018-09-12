package com.fiftyoneapps.irongrp.service.training.model;

import com.fiftyoneapps.irongrp.service.translation.model.Translation;
import org.springframework.data.neo4j.annotation.Query;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TranslationStatisticsRepository extends Neo4jRepository<TranslationStatistics, Long> {

    @Query("MATCH (t:Translation)<--(s:TranslationStatistic)-->(u:User) where id(u) = {userId} and id(t) = {translationId} RETURN s")
    TranslationStatistics findByUserAndTranslationId(@Param("userId") Long userId, @Param("translationId") Long translationId);

    @Query("MATCH (config:TrainingConfiguration)<--(training:Training)-->(t:Translation)" +
            " OPTIONAL MATCH (t)<--(s:TranslationStatistics)-->(r:TranslationRun)-->(training)" +
            " WITH r,t, max(r.runAt) as lastRun, count(r) as runs,training,config " +
            " WHERE runs < config.limitIterations and id(training) = {trainingId} " +
            " RETURN t")
    List<Translation> findNextTranslationWithRunCountOrderedByLastRun(@Param("trainingId") Long trainingId);
}
