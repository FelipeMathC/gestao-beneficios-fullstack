package com.example.backend.controller;

import com.example.backend.dto.TransferenciaRequest;
import com.example.backend.service.TransferenciaService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/transferencias")
@CrossOrigin(origins = "http://localhost:4200")
public class TransferenciaController {

    private final TransferenciaService service;

    public TransferenciaController(TransferenciaService service) {
        this.service = service;
    }

    @PostMapping
    public String transferir(@RequestBody TransferenciaRequest request) {
        service.transferir(request);
        return "Transferência realizada com sucesso";
    }
}