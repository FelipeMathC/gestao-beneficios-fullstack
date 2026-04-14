package com.example.backend.service;

import com.example.ejb.BeneficioEjbService;
import com.example.backend.dto.TransferenciaRequest;
import org.springframework.stereotype.Service;

@Service
public class TransferenciaService {

    private final BeneficioEjbService ejbService;

    public TransferenciaService(BeneficioEjbService ejbService) {
        this.ejbService = ejbService;
    }

    public void transferir(TransferenciaRequest request) {
        ejbService.transfer(
                request.getFromId(),
                request.getToId(),
                request.getAmount()
        );
    }
}
