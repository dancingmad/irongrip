package com.irongrp.mnemotica.service.exception;

public class ResourceMissingException extends RuntimeException {
    public ResourceMissingException(String errorMessage) {
        super(errorMessage);
    }
}
