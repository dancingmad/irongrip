package com.fiftyoneapps.irongrp.service.translation.model;

import org.springframework.data.neo4j.repository.Neo4jRepository;

public interface CourseRepository extends Neo4jRepository<Course, Long> {
}
