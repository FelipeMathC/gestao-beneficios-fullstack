package com.example.backend;

import com.example.backend.model.Beneficio;
import com.example.backend.service.BeneficioService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/beneficios")
@CrossOrigin(origins = "http://localhost:4200")
public class BeneficioController {

    private final BeneficioService service;

    public BeneficioController(BeneficioService service) {
        this.service = service;
    }

    @GetMapping
    public List<Beneficio> list() {
        return service.listar();
    }
    
    @GetMapping("/{id}")
    public Beneficio getById(@PathVariable Long id) {
        return service.buscarPorId(id);
    }
    
    @PostMapping
    public Beneficio criar(@RequestBody Beneficio beneficio) {
        return service.salvar(beneficio);
    }
    
    @PutMapping("/{id}")
    public Beneficio atualizar(@PathVariable Long id, @RequestBody Beneficio beneficio) {
        beneficio.setId(id);
        return service.salvar(beneficio);
    }
    
    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Long id) {
        service.deletar(id);
    }
}
