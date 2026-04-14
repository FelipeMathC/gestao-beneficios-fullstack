package com.example.backend.exception;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<?> handleBusinessError(IllegalArgumentException ex) {
        return ResponseEntity.badRequest().body(
                java.util.Map.of("erro", ex.getMessage())
        );
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<?> handleGenericError(Exception ex) {
        return ResponseEntity.internalServerError().body(
                java.util.Map.of("erro", "Erro interno no servidor")
        );
    }
}