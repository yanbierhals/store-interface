import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

export interface Cliente {
  customerId: number;
  name: string;
  email: string;
  phone: string;
  cpf: string;
  cnpj: string;
}


@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrls: ['./cliente-edit.component.scss']
})
export class ClienteEditComponent implements OnInit {
  cliente: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    const clienteId = this.route.snapshot.paramMap.get('id');
    if (clienteId)
    this.getCliente(clienteId);
  }

  getCliente(id: string) {
    this.http.get(`https://localhost:44339/api/Customers/${id}`).subscribe(
      (response: any) => {
        this.cliente = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateCliente() {
    this.http.put(`https://localhost:44339/api/Customers/${this.cliente.customerId}`, this.cliente).subscribe(
      (response: any) => {
        console.log(response);
        this.router.navigate(['/customers']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}