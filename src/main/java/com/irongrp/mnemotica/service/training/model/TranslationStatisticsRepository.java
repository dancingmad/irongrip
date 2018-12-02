package com.irongrp.mnemotica.service.training.model;

import org.springframework.data.neo4j.annotation.Query;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TranslationStatisticsRepository extends Neo4jRepository<TranslationStatistics, Long> {

    @Query("MATCH (t:Translation)<--(s:TranslationStatistics)-->(u:User)<--(training:Training) " +
            "where id(training) = {trainingId} and id(t) = {translationId} RETURN s")
    TranslationStatistics findByTrainingAndTranslation(@Param("trainingId") Long trainingId,
                                                       @Param("translationId") Long translationId);

    @Query("MATCH (config:TrainingConfiguration)<--(training:Training)-[translations:translations]->(t:Translation)" +
            " MATCH (translates:Translation)<-[translatesTo:translatesTo]-(t)<-[refers:refers]-(s:TranslationStatistics)" +
            " OPTIONAL MATCH (s)-->(r:TranslationRun)-->(training)" +
            " WITH s,t,refers,translatesTo,translates, max(r.runAt) as lastRun, count(r) as runs,training,config " +
            " WHERE runs < config.iterationsLimit and id(training) = {trainingId} " +
            " RETURN s,t,refers,translatesTo,translates " +
            " ORDER BY lastRun ASC" +
            " LIMIT 100 ")
    List<TranslationStatistics> findNextTranslationsForIterationConfig(@Param("trainingId") Long trainingId);

    @Query("MATCH (config:TrainingConfiguration)<--(training:Training)-->(t:Translation)" +
            " MATCH (translates:Translation)<-[:translatesTo]-(t)<--(s:TranslationStatistics)" +
            " OPTIONAL MATCH (s)-->(r:TranslationRun)-->(training)" +
            " WITH s, max(r.runAt) as lastRun, training, config " +
            " WHERE  id(training) = {trainingId} and " +
            "      (s.skillLevelFrom < config.skillLevelLimit and (config.direction = 'FROM' or config.direction = 'BOTH')" +
            "      OR (s.skillLevelTo < config.skillLevelLimit and (config.direction = 'TO' or config.direction = 'BOTH')" +
            " RETURN s " +
            " ORDER BY lastRun ASC" +
            " LIMIT 100 ")
    List<TranslationStatistics> findNextTranslationsForSkill(@Param("trainingId") Long trainingId);

    @Query("MATCH (t:Translation)<--(s:TranslationStatistics)-->(u:User) " +
            " WHERE id(u) = {userId} and id(t) = {translationId} " +
            " RETURN s")
    TranslationStatistics findByUserAndTranslation(@Param("userId") Long userId,
                                                   @Param("translationId") Long translationId);

    @Query("MATCH (t:Translation)-->(t2:Translation) " +
            " MATCH (u:User)<--(s:TranslationStatistics)-->(t)-->(tag:TranslationTag) " +
            " OPTIONAL MATCH (s)-->(r:TranslationRun)-->(training)" +
            " WITH s, t, t2, tag, u, max(r.runAt) as lastRun" +
            " WHERE id(u) = {userId} " +
            " RETURN s, t, t2, tag " +
            " ORDER BY lastRun " +
            " LIMIT {limit}")
    List<TranslationStatistics> findByUser(@Param("userId") Long userId, @Param("limit") Integer limit);


    @Query("MATCH (s:TranslationStatistics)-->(run:TranslationRun)-->(training:Training) " +
            " WHERE id(training) = {trainingId}" +
            " RETURN count(run) as runCount, " +
            "        sum(run.hit) as hitCount, " +
            "        min(s.skillLevelTo) as minSkillLevelTo," +
            "        min(s.skillLevelFrom) as minSkillLevelFrom," +
            "        avg(s.skillLevelTo) as avgSkillLevelTo, " +
            "        avg(s.skillLevelFrom) as avgSkillLevelFrom")
    TrainingStatistics getStatisticsForTraining(@Param("trainingId") Long trainingId);


}
