import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { first } from 'rxjs/internal/operators/first';

export interface Cliente {
  name: string;
  email: string;
  phone: string;
  cpf: string;
  cnpj: string;
}


@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.scss']
})
export class ClienteCreateComponent {
  novoCliente: Cliente = {
    name: '',
    email: '',
    phone: '',
    cpf: '',
    cnpj: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  addCliente() {
    this.http.post<Cliente>('https://localhost:44339/api/Customers', this.novoCliente).pipe(first()).subscribe({
      next: (data) => {
        console.log(data);
        this.router.navigate(['/clientes']);
      },
      error: (e) => {
        console.log(e);
        this.router.navigate(['/clientes']);
      }
    }
     
    );
  }
}
