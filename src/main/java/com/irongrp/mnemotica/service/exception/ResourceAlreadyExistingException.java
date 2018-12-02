package com.irongrp.mnemotica.service.exception;

public class ResourceAlreadyExistingException extends RuntimeException {

    public ResourceAlreadyExistingException(String message) {
        super(message);
    }
}
