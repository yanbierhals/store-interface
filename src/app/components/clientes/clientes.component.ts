import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from './clientes.interface';
import { first } from 'rxjs/internal/operators/first';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent {
  clientes: Cliente[] = [];
  isDeleting?: boolean;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getClientes();
  }

  getClientes() {
    this.http.get<Cliente[]>('https://localhost:44339/api/Customers').subscribe((response) => {3
      console.log(response)
      this.clientes = response;
    });
  }

  getCliente(id: number) {
    this.http.get<Cliente>(`https://localhost:44339/api/Customers/${id}`).subscribe((response) => {
      console.log(response);
    });
  }

  deleteCliente(id: number) {
    this.http.delete(`https://localhost:44339/api/Customers/${id}`).pipe(first()).subscribe({
      next: (data) => {
        console.log(data);
        this.getClientes();
      },
      error: (e) => {
        console.log(e);
        this.getClientes();
      }
    }
     
    );
  }
}
export { Cliente };

