package com.irongrp.mnemotica.config;

import com.irongrp.mnemotica.service.user.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class WebSecurityFilter implements Filter {

    private static final Logger LOGGER = LoggerFactory.getLogger(WebSecurityFilter.class);

    @Autowired
    private UserService userService;

    @Bean
    public WebSecurityFilter filter() throws Exception {
        return new WebSecurityFilter();
    }

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {

        filterChain.doFilter(servletRequest, servletResponse);
    }

    private boolean doFilter(ServletRequest servletRequest, ServletResponse servletResponse) {
        if (!(servletRequest instanceof HttpServletRequest)) {
            return true;
        }
        HttpServletRequest request = (HttpServletRequest) servletRequest;
        if (request.getMethod().equalsIgnoreCase("get")) {
            return true;
        }
        if (request.getServletPath().startsWith("/api/user")) {
            return true;
        }
        if (!(servletResponse instanceof HttpServletResponse)) {
            userService.getLoggedInUser(request);
            return true;
        }

        try {
            userService.getLoggedInUser(request);
        } catch (RuntimeException re) {
            LOGGER.info("Unauthorized access for " + request.getServletPath());
            ((HttpServletResponse) servletResponse).setStatus(401);
        }
        return true;
    }

    @Override
    public void destroy() {

    }
}
