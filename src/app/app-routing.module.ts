import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ClienteCreateComponent } from './components/clientes/cliente-create/cliente-create.component';
import { ClienteEditComponent } from './components/clientes/cliente-edit/cliente-edit.component';
import { FornecedorCreateComponent } from './components/fornecedores/fornecedor-create/fornecedor-create.component';
import { FornecedorEditComponent } from './components/fornecedores/fornecedor-edit/fornecedor-edit.component';
import { ProdutoCreateComponent } from './components/produtos/produto-create/produto-create.component';
import { ProdutoEditComponent } from './components/produtos/produto-edit/produto-edit.component';
import { FornecedoresComponent } from './components/fornecedores/fornecedores.component';
import { ProdutosComponent } from './components/produtos/produtos.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'fornecedores', component: FornecedoresComponent },
      { path: 'clientes', component: ClientesComponent},
      { path: 'produtos', component: ProdutosComponent },
      { path: 'create-cliente', component: ClienteCreateComponent},
      { path: 'edit-cliente/:id', component: ClienteEditComponent},
      { path: 'create-fornecedor', component: FornecedorCreateComponent},
      { path: 'edit-fornecedor/:id', component: FornecedorEditComponent},
      { path: 'create-produto', component: ProdutoCreateComponent},
      { path: 'edit-produto/:id', component: ProdutoEditComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
