package com.fiftyoneapps.irongrp.config;

import com.fiftyoneapps.irongrp.service.user.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
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
        LOGGER.info("Filter activated!");
        if (servletRequest instanceof HttpServletRequest) {
            HttpServletRequest request = (HttpServletRequest) servletRequest;
            if (!request.getMethod().equalsIgnoreCase("get")) {
                userService.getLoggedInUser(request);
            }
        }
        filterChain.doFilter(servletRequest, servletResponse);
    }

    @Override
    public void destroy() {

    }
}
