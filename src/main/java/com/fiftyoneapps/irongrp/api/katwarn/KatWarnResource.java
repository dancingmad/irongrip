package com.fiftyoneapps.irongrp.api.katwarn;

import com.fiftyoneapps.irongrp.service.katwarning.KatWarning;
import com.fiftyoneapps.irongrp.service.katwarning.KatWarningRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/katwarn")
public class KatWarnResource {

    private Logger LOGGER = LoggerFactory.getLogger(KatWarnResource.class);
    private KatWarningRepository katWarningRepository;


    @Autowired
    private KatWarnResource(KatWarningRepository katWarningRepository,
                            @Value("${spring.data.neo4j.username}") String username,
                            @Value("${spring.data.neo4j.password}") String password,
                            @Value("${spring.data.neo4j.uri}") String uri) {
        this.katWarningRepository = katWarningRepository;
        LOGGER.info("Starting with user {} password {} and uri {} ",username,password,uri);
    }

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public List<KatWarning> list() {
        List<KatWarning> katWarnings = new ArrayList<>();
        katWarningRepository.findAll().forEach(katWarnings::add);
        return katWarnings;
    }

    @RequestMapping(value = "/{katId}", method = RequestMethod.GET)
    public KatWarning detail(@PathVariable Long katId) {
        return katWarningRepository.findById(katId).get();
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public KatWarning add(@Valid @RequestBody KatWarning katWarning) {
        // save the new Warning
        katWarningRepository.save(katWarning);
        return katWarning;
    }

    @RequestMapping(value = "/{katId}", method = RequestMethod.PUT)
    public void edit(@PathVariable Long katId, @Valid @RequestBody KatWarning katWarning) {
        // update the warning
        katWarningRepository.save(katWarning);
    }

    @RequestMapping(value = "/{katId}", method = RequestMethod.DELETE)
    public void edit(@PathVariable Long katId) {
        // update the warning
        katWarningRepository.deleteById(katId);
    }



}
