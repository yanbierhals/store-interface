import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

export interface Fornecedor {
  supplierId: number;
  name: string;
  email: string;
  phone: string;
  cnpj: string;
  brandId: number;
}

@Component({
  selector: 'app-fornecedor-edit',
  templateUrl: './fornecedor-edit.component.html',
  styleUrls: ['./fornecedor-edit.component.scss']
})
export class FornecedorEditComponent implements OnInit {
  fornecedor: Fornecedor = {} as Fornecedor;

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    const fornecedorId = this.route.snapshot.paramMap.get('id');
    if (fornecedorId) {
      this.getFornecedor(fornecedorId);
    }
  }

  getFornecedor(id: string) {
    this.http.get<Fornecedor>(`https://localhost:44339/api/Suppliers/${id}`).subscribe(
      (response) => {
        this.fornecedor = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateFornecedor() {
    this.http.put(`https://localhost:44339/api/Suppliers/${this.fornecedor.supplierId}`, this.fornecedor).subscribe(
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
