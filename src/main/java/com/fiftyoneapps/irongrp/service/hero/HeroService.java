package com.fiftyoneapps.irongrp.service.hero;

import com.fiftyoneapps.irongrp.service.exception.ResourceMissingException;
import com.fiftyoneapps.irongrp.service.hero.model.Hero;
import com.fiftyoneapps.irongrp.service.hero.model.HeroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class HeroService {

    @Autowired
    private HeroRepository heroRepository;


    public Hero addHero(Hero hero) {
        return heroRepository.save(hero);
    }

    public void editHero(Hero hero) {
        if (!heroRepository.findById(hero.getId()).isPresent()) {
            throw new ResourceMissingException();
        }
        heroRepository.save(hero);
    }

    public List<Hero> getHeroes() {
        List<Hero> heroes = new ArrayList<>();
        heroRepository.findAll().forEach(heroes::add);
        return heroes;
    }

    public Optional<Hero> getHero(Long id) {
        return heroRepository.findById(id);
    }



}
