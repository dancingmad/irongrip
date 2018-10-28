package com.fiftyoneapps.irongrp.service.translation.model;

import org.springframework.data.neo4j.annotation.Query;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CourseRepository extends Neo4jRepository<Course, Long> {

    @Query("MATCH (c:Course)-->(u:User) where id(u) = {userId} return c")
    List<Course> findByUser(@Param("userId") Long userId);
}
