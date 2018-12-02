package com.fiftyoneapps.irongrp.service.training.model;

import org.springframework.data.neo4j.repository.Neo4jRepository;

public interface TrainingConfigurationRepository extends Neo4jRepository<TrainingConfiguration, Long> {
}
