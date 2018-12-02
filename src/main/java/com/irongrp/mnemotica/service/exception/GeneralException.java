package com.irongrp.mnemotica.service.exception;

public class GeneralException extends RuntimeException {

    public GeneralException(String errorMessage) {
        super(errorMessage);
    }

    public GeneralException(String errorMessage, Throwable t) {
        super(errorMessage, t);
    }

}
