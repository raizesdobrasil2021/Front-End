import { RouterModule, } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProdutoComponent } from './produto/produto.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { TodosProdutosComponent } from './todos-produtos/todos-produtos.component';
import { ProdutoEditComponent } from './edit/produto-edit/produto-edit.component';
import { ProdutoDeleteComponent } from './delete/produto-delete/produto-delete.component';
import { MeusProdutosComponent } from './meus-produtos/meus-produtos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/*Material pasta separada */
import { MaterialModule } from './material/material.module';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    LoginComponent,
    CadastroComponent,
    InicioComponent,
    ProdutoComponent,
    CategoriaComponent,
    CadastroProdutoComponent,
    TodosProdutosComponent,
    ProdutoEditComponent,
    ProdutoDeleteComponent,
    MeusProdutosComponent,
    SobreNosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
