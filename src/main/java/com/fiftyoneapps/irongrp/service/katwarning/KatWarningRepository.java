package com.fiftyoneapps.irongrp.service.katwarning;

import org.springframework.data.neo4j.annotation.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface KatWarningRepository extends CrudRepository<KatWarning, Long>{

    @Query("MATCH (m:KatWarning{locationId:{0}}) return m")
    List<KatWarning> findActiveByLocationId(String locationId);
}
