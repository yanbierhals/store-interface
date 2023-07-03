import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendedoresComponent } from './components/vendedores/vendedores.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'vendedores', component: VendedoresComponent },
      { path: 'clientes', component: ClientesComponent },
      { path: 'produtos', component: ProdutosComponent },
      { path: 'pedidos', component: PedidosComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
