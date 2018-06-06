package com.fiftyoneapps.irongrp.api.katwarn;

import com.fiftyoneapps.irongrp.service.katwarning.KatWarning;
import com.fiftyoneapps.irongrp.service.katwarning.KatWarningRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/{env}/api/katwarn")
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
    public List<KatWarning> list(@PathVariable("env") String env) {
        List<KatWarning> katWarnings = new ArrayList<>();
        katWarningRepository.findAll().forEach(katWarnings::add);
        return katWarnings.stream()
                .filter(warn -> env.equals(warn.getEnv()))
                .collect(Collectors.toList());
    }


    @RequestMapping(value = "/{locationId}", method = RequestMethod.GET)
    public KatWarning detail(@PathVariable("env") String env, @PathVariable String locationId) {
        List<KatWarning> warnings = katWarningRepository.findActiveByLocationId(locationId);
        if (CollectionUtils.isEmpty(warnings)) {
            return null;
        }
        return warnings.stream()
                .filter(warn -> env.equals(warn.getEnv()))
                .findFirst().get();
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public KatWarning add(@PathVariable("env") String env, @Valid @RequestBody KatWarning katWarning) {
        List<KatWarning> warnings = katWarningRepository.findActiveByLocationId(katWarning.getLocationId()).stream()
                .filter(warn -> env.equals(warn.getEnv()))
                .collect(Collectors.toList());
        if (!CollectionUtils.isEmpty(warnings)) {
            throw new RuntimeException("Already active warning for this location");
        }
        // save the new Warning
        katWarning.setEnv(env);
        katWarningRepository.save(katWarning);
        return katWarning;
    }

    @RequestMapping(value = "/", method = RequestMethod.PUT)
    public void edit(@PathVariable("env") String env, @Valid @RequestBody KatWarning katWarning) {
        KatWarning currentWarning = katWarningRepository.findById(katWarning.getId()).get();
        // prevent switching locations
        katWarning.setLocationId(currentWarning.getLocationId());
        // update the warning
        katWarning.setEnv(env);
        katWarningRepository.save(katWarning);
    }

    @RequestMapping(value = "/{locationId}", method = RequestMethod.DELETE)
    public void delete(@PathVariable("env") String env, @PathVariable String locationId) {
        List<KatWarning> warnings = katWarningRepository.findActiveByLocationId(locationId);
        // delete all active warnings for location
        warnings.forEach(warn -> {
                if (env.equals(warn.getEnv())) {
                    katWarningRepository.delete(warn);
                }
        });
    }



}
