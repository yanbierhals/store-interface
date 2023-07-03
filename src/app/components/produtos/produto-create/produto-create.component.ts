import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { first } from 'rxjs/internal/operators/first';

export interface Produto {
name: string;
unit: string;
cost: number;
count: number;
supplierId: number;
}

@Component({
selector: 'app-produto-create',
templateUrl: './produto-create.component.html',
styleUrls: ['./produto-create.component.scss']
})
export class ProdutoCreateComponent {
novoProduto: Produto = {
name: '',
unit: '',
cost: 0,
count: 0,
supplierId: 0
};

constructor(private http: HttpClient, private router: Router) {}

addProduto() {
  this.http.post<Produto>('https://localhost:44339/api/Products', this.novoProduto).pipe(first()).subscribe({
  next: (data) => {
    console.log(data);
    this.router.navigate(['/produtos']);
    },
  error: (e) => {
    console.log(e);
    this.router.navigate(['/produtos']);
    }
  });
}
}