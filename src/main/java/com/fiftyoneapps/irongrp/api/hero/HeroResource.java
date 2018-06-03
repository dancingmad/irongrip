package com.fiftyoneapps.irongrp.api;

import com.fiftyoneapps.irongrp.service.hero.HeroService;
import com.fiftyoneapps.irongrp.service.exception.GeneralException;
import com.fiftyoneapps.irongrp.service.exception.ResourceMissingException;
import com.fiftyoneapps.irongrp.service.hero.model.Hero;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/hero")
public class HeroResource {

    @Autowired
    private HeroService heroService;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public List<Hero> list() {
        return heroService.getHeroes();
    }

    @RequestMapping(value = "/{heroId}", method = RequestMethod.GET)
    public Hero detail(@PathVariable Long heroId) {
        Optional<Hero> hero = heroService.getHero(heroId);
        if (!hero.isPresent()) {
            throw new ResourceMissingException();
        }
        return hero.get();
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public Hero add(@Valid @RequestBody Hero hero) {
        return heroService.addHero(hero);
    }

    @RequestMapping(value = "/{heroId}", method = RequestMethod.PUT)
    public void edit(@PathVariable Long heroId, @Valid @RequestBody Hero hero) {
        if (!heroId.equals(hero.getId())) {
            throw new GeneralException("Id not matching");
        }
        heroService.editHero(hero);
    }





}
