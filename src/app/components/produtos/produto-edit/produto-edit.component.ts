import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface Produto {
  productId: number;
  name: string;
  unit: string;
  cost: number;
  count: number;
  supplierId: number;
}

@Component({
  selector: 'app-produto-edit',
  templateUrl: './produto-edit.component.html',
  styleUrls: ['./produto-edit.component.scss']
})
export class ProdutoEditComponent implements OnInit {
  produto: Produto = {} as Produto;

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    const produtoId = this.route.snapshot.paramMap.get('id');
    if (produtoId) {
      this.getProduto(produtoId);
    }
  }

  getProduto(id: string) {
    this.http.get<Produto>(`https://localhost:44339/api/Products/${id}`).subscribe(
      (response) => {
        this.produto = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateProduto() {
    this.http.put(`https://localhost:44339/api/Products/${this.produto.productId}`, this.produto).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/products']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
