package com.irongrp.mnemotica.service.translation.model;

import org.springframework.data.neo4j.annotation.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TranslationTagRepository extends CrudRepository<TranslationTag, Long> {

    @Query("MATCH (t:Translation)-[:tags]->(tag:TranslationTag) RETURN tag")
    List<TranslationTag> findAllUsed();

    @Query("MATCH (t:TranslationTag) where not (t)<--() detach delete t")
    void deleteUnusedTags();

    @Query("MATCH (t:Translation)-[:emptyTag]->(tag:TranslationTag) RETURN tag LIMIT 1")
    TranslationTag getEmptyTag();
}
