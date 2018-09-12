package com.fiftyoneapps.irongrp.api;

import com.fiftyoneapps.irongrp.service.exception.UnauthorizedException;
import com.fiftyoneapps.irongrp.service.user.UserService;
import com.fiftyoneapps.irongrp.service.user.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api/user")
public class UserResource {

    @Autowired
    private UserService userService;


    @RequestMapping(path = "/{username}/authentication", method = RequestMethod.GET)
    public User authenticate(@PathVariable String username, @RequestParam String password, HttpServletRequest request) {
        User user = userService.authenticate(username, password);
        if (user == null) {
            throw new UnauthorizedException("Invalid Credentials");
        }
        userService.setUserForRequest(request, username);
        return user;
    }

    @RequestMapping(path = "/logout", method = RequestMethod.GET)
    public User authenticate(HttpServletRequest request) {
        User user = userService.getLoggedInUser(request);
        userService.removeUserForRequest(request);
        return user;
    }

    @RequestMapping(path = "/", method = RequestMethod.GET)
    public User getLoggedInUser(HttpServletRequest request) {
        return userService.getLoggedInUser(request);
    }

    @RequestMapping(path = "/", method = RequestMethod.POST, consumes = "application/json")
    public User register(@RequestBody RegisterUser registerUser, HttpServletRequest request) {
        User user = userService.register(registerUser.username, registerUser.password);
        if (user == null) {
            return null;
        }
        userService.setUserForRequest(request, user.getUsername());
        return user;
    }

    @RequestMapping(path = "/register", method = RequestMethod.POST, consumes = "application/json")
    public User register(@RequestParam String username, @RequestParam String password, HttpServletRequest request) {
        User user = userService.register(username, password);
        if (user == null) {
            return null;
        }
        userService.setUserForRequest(request, user.getUsername());
        return user;
    }



    public static class RegisterUser {
        String username;
        String password;

        public String getUsername() {
            return username;
        }

        public String getPassword() {
            return password;
        }
    }
}
