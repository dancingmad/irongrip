package com.fiftyoneapps.irongrp.service.user;

import com.fiftyoneapps.irongrp.service.exception.ResourceAlreadyExistingException;
import com.fiftyoneapps.irongrp.service.exception.UnauthorizedException;
import com.fiftyoneapps.irongrp.service.user.model.User;
import com.fiftyoneapps.irongrp.service.user.model.UserRepository;
import com.google.common.hash.Hashing;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import javax.servlet.http.HttpServletRequest;
import java.nio.charset.StandardCharsets;

@Service
public class UserService {

    private static final String SESSION_USERNAME = "SESSION_USERNAME";
    private UserRepository userRepository;

    @Autowired
    UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User authenticate(String username, String password) {
        User user = userRepository.findByUsername(username);
        if (user == null) {
            return null;
        }
        String passwordHash = Hashing.sha256().hashString(password,
                StandardCharsets.UTF_8).toString();

        if (!passwordHash.equals(user.getHashedPassword())) {
            return null;
        }
        return user;
    }

    public User register(String username, String password) {
        if (userRepository.findByUsername(username) != null) {
            throw new ResourceAlreadyExistingException("User "+ username + " does already exist");
        }

        String passwordHash = Hashing.sha256().hashString(password,
                StandardCharsets.UTF_8).toString();
        User user = new User();
        user.setHashedPassword(passwordHash);
        user.setUsername(username);
        return userRepository.save(user);
    }

    public User getUser(String username) {
        return userRepository.findByUsername(username);
    }


    public void setUserForRequest(HttpServletRequest request, String username) {
        request.getSession().setAttribute(SESSION_USERNAME, username);
    }

    public User getLoggedInUser(HttpServletRequest request) {
        String sessionUser = (String) request.getSession().getAttribute(SESSION_USERNAME);
        if (StringUtils.isEmpty(sessionUser)) {
            throw new UnauthorizedException("Not authenticated!");
        }
        User user = getUser(sessionUser);
        if (user == null) {
            request.getSession().removeAttribute(SESSION_USERNAME);
            throw new RuntimeException("Unexpected: Already authenticated User missing from Database");
        }
        return user;
    }

    public void removeUserForRequest(HttpServletRequest request) {
        request.getSession().removeAttribute(SESSION_USERNAME);
    }
}
