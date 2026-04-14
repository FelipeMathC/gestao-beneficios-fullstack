package com.example.ejb;

import com.example.backend.model.Beneficio;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;

@Service
public class BeneficioEjbService {

    @PersistenceContext
    private EntityManager em;

    @Transactional
    public void transfer(Long fromId, Long toId, BigDecimal amount) {

        if (amount == null || amount.compareTo(BigDecimal.ZERO) <= 0) {
            throw new IllegalArgumentException("Valor da transferência deve ser maior que zero");
        }

        Beneficio from = em.find(Beneficio.class, fromId);
        Beneficio to   = em.find(Beneficio.class, toId);

        if (from == null || to == null) {
            throw new IllegalArgumentException("Conta não encontrada");
        }

        if (from.getValor().compareTo(amount) < 0) {
            throw new IllegalArgumentException("Saldo insuficiente");
        }

        from.setValor(from.getValor().subtract(amount));
        to.setValor(to.getValor().add(amount));
    }
}