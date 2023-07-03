import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/internal/operators/first';
import { Fornecedor } from './fornecedores.interface';

@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.component.html',
  styleUrls: ['./fornecedores.component.scss']
})
export class FornecedoresComponent {
  suppliers: Fornecedor[] = [];
  isDeleting?: boolean;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getSuppliers();
  }

  getSuppliers() {
    this.http.get<Fornecedor[]>('https://localhost:44339/api/Suppliers').subscribe((response) => {
      console.log(response);
      this.suppliers = response;
    });
  }

  getSupplier(id: number) {
    this.http.get<Fornecedor>(`https://localhost:44339/api/Suppliers/${id}`).subscribe((response) => {
      console.log(response);
    });
  }

  deleteSupplier(id: number) {
    this.http.delete(`https://localhost:44339/api/Suppliers/${id}`).pipe(first()).subscribe({
      next: (data) => {
        console.log(data);
        this.getSuppliers();
      },
      error: (e) => {
        console.log(e);
        this.getSuppliers();
      }
    });
  }
}
export { Fornecedor };
