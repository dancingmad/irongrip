package com.irongrp.mnemotica.service.training.model;

import org.springframework.data.neo4j.annotation.Query;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.repository.query.Param;

public interface ChapterStatisticsRepository extends Neo4jRepository<ChapterStatistics, Long> {

    @Query("MATCH (u:User)<--(chapterStatistics:ChapterStatistics)-->(chapter:Chapter)" +
            "where id(u) = {userId} and id(chapter) = {chapterId} RETURN chapterStatistics")
    ChapterStatistics findByUserAndChapter(@Param("userId") Long userId,
                                           @Param("chapterId") Long chapterId);

}
