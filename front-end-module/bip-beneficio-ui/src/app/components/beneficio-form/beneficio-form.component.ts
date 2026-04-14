import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { BeneficioService } from '../../services/beneficio.service';
import { Beneficio } from '../../models/beneficio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-beneficio-form',
  standalone: true,
  imports: [CommonModule, RouterModule,FormsModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, MatToolbarModule],
  templateUrl: './beneficio-form.component.html'
})
export class BeneficioFormComponent implements OnInit {

  beneficio: Beneficio = {
    nome: '',
    descricao: '',
    valor: 0,
    ativo: true
  };

  constructor(
    private service: BeneficioService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.service.buscarPorId(+id).subscribe(data => {
        this.beneficio = data;
      });
    }
  }

  salvar() {
    if (this.beneficio.id) {
      this.service.atualizar(this.beneficio.id, this.beneficio)
        .subscribe(() => this.router.navigate(['/']));
    } else {
      this.service.criar(this.beneficio)
        .subscribe(() => this.router.navigate(['/']));
    }
  }
}