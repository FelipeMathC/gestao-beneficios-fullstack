package com.example.backend.service;

import com.example.backend.model.Beneficio;
import com.example.backend.repository.BeneficioRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BeneficioService {

    private final BeneficioRepository repository;

    public BeneficioService(BeneficioRepository repository) {
        this.repository = repository;
    }

    public List<Beneficio> listar() {
        return repository.findAll();
    }

    public Beneficio buscarPorId(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Benefício não encontrado"));
    }

    public Beneficio salvar(Beneficio beneficio) {
        return repository.save(beneficio);
    }

    public void deletar(Long id) {
        repository.deleteById(id);
    }
}