import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './produto.interface';
import { first } from 'rxjs/internal/operators/first';

@Component({
  selector: 'app-products',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent {
  products: Product[] = [];
  isDeleting?: boolean;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.http.get<Product[]>('https://localhost:44339/api/Products').subscribe((response) => {
      console.log(response);
      this.products = response;
    });
  }

  getProduct(id: number) {
    this.http.get<Product>(`https://localhost:44339/api/Products/${id}`).subscribe((response) => {
      console.log(response);
    });
  }

  deleteProduct(id: number) {
    this.http.delete(`https://localhost:44339/api/Products/${id}`).pipe(first()).subscribe({
      next: (data) => {
        console.log(data);
        this.getProducts();
      },
      error: (e) => {
        console.log(e);
        this.getProducts();
      }
    });
  }
}
export { Product };
