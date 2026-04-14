import { ChangeDetectorRef, Component, OnInit, signal } from '@angular/core';
import { BeneficioService } from '../../services/beneficio.service';
import { Beneficio } from '../../models/beneficio';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'bip-beneficio-list',
  standalone: true,
  imports: [CommonModule, RouterModule, CommonModule, RouterModule, MatTableModule, MatButtonModule, MatIconModule, MatToolbarModule],
  templateUrl: './beneficio-list.component.html'
})
export class BeneficioListComponent implements OnInit {

  beneficios = signal<Beneficio[]>([]);
  displayedColumns: string[] = ['id', 'nome', 'valor', 'acoes'];

  constructor(private service: BeneficioService) {}

  ngOnInit(): void {
    this.carregar();
  }

  carregar() {
    this.service.listar().subscribe({
      next: data => {
        console.log('DADOS:', data);
        this.beneficios.set(data);
      },
      error: err => {
        console.error('ERRO:', err);
      }
    });
  }

 deletar(id: number) {
    this.service.deletar(id).subscribe(() => {
      this.beneficios.update(lista => lista.filter(b => b.id !== id));
    });
  }
}