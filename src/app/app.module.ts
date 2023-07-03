import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { LayoutComponent } from './components/layout/layout.component';
import { RouterModule } from '@angular/router';
import { FornecedoresComponent } from './components/fornecedores/fornecedores.component';
import { HttpClientModule } from '@angular/common/http';
import { ClienteCreateComponent } from './components/clientes/cliente-create/cliente-create.component';
import { ClienteEditComponent } from './components/clientes/cliente-edit/cliente-edit.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FornecedorCreateComponent } from './components/fornecedores/fornecedor-create/fornecedor-create.component';
import { FornecedorEditComponent } from './components/fornecedores/fornecedor-edit/fornecedor-edit.component';
import { ProdutoCreateComponent } from './components/produtos/produto-create/produto-create.component';
import { ProdutoEditComponent } from './components/produtos/produto-edit/produto-edit.component';

@NgModule({
  declarations: [
    LayoutComponent,
    AppComponent,
    ClientesComponent,
    ProdutosComponent,
    FornecedoresComponent,
    ClienteCreateComponent,
    ClienteEditComponent,
    FornecedorCreateComponent,
    FornecedorEditComponent,
    ProdutoCreateComponent,
    ProdutoEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule,
    HttpClientModule,
    CommonModule,
     FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
