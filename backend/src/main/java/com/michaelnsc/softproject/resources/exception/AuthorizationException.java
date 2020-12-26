package com.michaelnsc.softproject.resources.exception;

public class AuthorizationException extends RuntimeException{

    public AuthorizationException() {
    }

    public AuthorizationException(String message, Throwable cause) {
        super(message, cause);
    }
}
