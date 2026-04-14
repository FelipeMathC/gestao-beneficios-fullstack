import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TransferenciaService } from '../../services/transferencia.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-transferencia',
  standalone: true,
  imports: [
    CommonModule, FormsModule, RouterModule, MatFormFieldModule,
    MatInputModule, MatButtonModule, MatCardModule, MatToolbarModule,
    MatIconModule, MatSnackBarModule
  ],
  templateUrl: './transferencia.component.html',
  styleUrl: './transferencia.component.scss'
})
export class TransferenciaComponent implements OnInit {
  fromId = signal<number | null>(null);
  toId = signal<number | null>(null);
  valor = signal<number | null>(null);

  constructor(
    private service: TransferenciaService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) this.fromId.set(Number(idParam));
  }

  transferir() {
    const origem = this.fromId();
    const destino = this.toId();
    const valorTransf = this.valor();

    if (!origem || !destino || !valorTransf) {
      this.exibirErro('Preencha todos os campos obrigatórios.');
      return;
    }

    if (valorTransf <= 0) {
      this.exibirErro('O valor deve ser maior que zero.');
      return;
    }

    if (origem === destino) {
      this.exibirErro('As contas não podem ser iguais.');
      return;
    }

    this.service.transferir(origem, destino, valorTransf).subscribe({
      next: () => {
        this.exibirSucessoEVoltar();
      },
      error: (err) => {
        if (err.status >= 200 && err.status < 300) {
          this.exibirSucessoEVoltar();
          return;
        }
        let msgBack = '';
        try {
           const body = JSON.parse(err.error);
           msgBack = body.erro;
        } catch (e) {
           msgBack = err.error?.erro || 'Erro interno ao realizar transferência.';
        }

        this.exibirErro(msgBack);
      }
    });
  }

  private exibirSucessoEVoltar() {
    this.snackBar.open('Transferência realizada com sucesso!', 'Fechar', { 
      duration: 3000, 
      panelClass: ['success-snackbar'],
      verticalPosition: 'top'
    });
    this.router.navigate(['/']);
  }

  private exibirErro(msg: string) {
    this.snackBar.open(msg, 'Entendido', {
      duration: 5000,
      panelClass: ['error-snackbar'],
      verticalPosition: 'top'
    });
  }
}