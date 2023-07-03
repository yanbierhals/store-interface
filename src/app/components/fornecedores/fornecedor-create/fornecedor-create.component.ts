import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface Fornecedor {
  name: string;
  email: string;
  phone: string;
  cnpj: string;
  brandId: number;
}

@Component({
  selector: 'app-fornecedor-create',
  templateUrl: './fornecedor-create.component.html',
  styleUrls: ['./fornecedor-create.component.scss']
})
export class FornecedorCreateComponent {
  novoFornecedor: Fornecedor = {} as Fornecedor;

  constructor(private http: HttpClient, private router: Router) {}

  addFornecedor() {
    this.http.post<Fornecedor>('https://localhost:44339/api/Suppliers', this.novoFornecedor).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/fornecedores']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
