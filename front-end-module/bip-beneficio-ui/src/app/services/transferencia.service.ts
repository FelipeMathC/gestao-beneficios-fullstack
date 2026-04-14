import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private api = 'http://localhost:8080/api/v1/transferencias';

  constructor(private http: HttpClient) {}

  transferir(fromId: number, toId: number, valor: number) {
    return this.http.post(this.api, {
      fromId,
      toId,
      amount: valor
    }, { responseType: 'text' });
  }
}