package com.fiftyoneapps.irongrp.api;

import com.fiftyoneapps.irongrp.service.exception.UnauthorizedException;
import com.fiftyoneapps.irongrp.service.user.UserService;
import com.fiftyoneapps.irongrp.service.user.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api/user")
public class UserResource {

    private static final String SESSION_USERNAME = "SESSION_USERNAME";

    @Autowired
    private UserService userService;

    @RequestMapping(path = "/{username}/authentication", method = RequestMethod.GET)
    public User authenticate(@PathVariable String username, @RequestParam String password, HttpServletRequest request) {
        User user = userService.authenticate(username, password);
        if (user == null) {
            throw new UnauthorizedException("Invalid Credentials");
        }
        request.getSession().setAttribute(SESSION_USERNAME, username);
        return user;
    }

    @RequestMapping(path = "/logout", method = RequestMethod.GET)
    public User authenticate(HttpServletRequest request) {
        User user = getLoggedInUser(request);
        request.getSession().removeAttribute(SESSION_USERNAME);
        return user;
    }

    @RequestMapping(path = "/", method = RequestMethod.GET)
    public User getLoggedInUser(HttpServletRequest request) {
        String sessionUser = (String)request.getSession().getAttribute(SESSION_USERNAME);
        if (StringUtils.isEmpty(sessionUser)) {
            throw new UnauthorizedException("Not authenticated!");
        }
        User user = userService.getUser(sessionUser);
        if (user == null) {
            request.getSession().removeAttribute(SESSION_USERNAME);
            throw new RuntimeException("Unexpected: Already authenticated User missing from Database");
        }
        return user;
    }

    @RequestMapping(path = "/", method = RequestMethod.POST, consumes = "application/json")
    public User register(@RequestBody RegisterUser registerUser, HttpServletRequest request) {
        User user = userService.register(registerUser.username, registerUser.password);
        if (user == null) {
            return null;
        }
        request.getSession().setAttribute(SESSION_USERNAME, registerUser.username);
        return user;
    }

    @RequestMapping(path = "/register", method = RequestMethod.POST, consumes = "application/json")
    public User register(@RequestParam String username, @RequestParam String password, HttpServletRequest request) {
        User user = userService.register(username, password);
        if (user == null) {
            return null;
        }
        request.getSession().setAttribute(SESSION_USERNAME, username);
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
