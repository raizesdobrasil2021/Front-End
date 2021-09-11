import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroProdutoComponent} from './cadastro-produto/cadastro-produto.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ProdutoDeleteComponent } from './delete/produto-delete/produto-delete.component';
import { ProdutoEditComponent } from './edit/produto-edit/produto-edit.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { MeusProdutosComponent } from './meus-produtos/meus-produtos.component';
import { ProdutoComponent } from './produto/produto.component';
import { TodosProdutosComponent } from './todos-produtos/todos-produtos.component';

const routes: Routes = [
  {path:'', redirectTo:'inicio', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'cadastro', component: CadastroComponent},
  {path:'inicio',component: InicioComponent},
  {path:'produto/:id',component:ProdutoComponent},
  {path:'categoria/:id',component:CategoriaComponent},
  {path:'categoria',component:CategoriaComponent},
  {path:'cadastro-produto',component:CadastroProdutoComponent},
  {path: 'todos-produtos',component:TodosProdutosComponent},
  {path:  'meus-produtos',component:MeusProdutosComponent},
  {path: 'produto-edit/:id',component: ProdutoEditComponent},
  {path: 'produto-delete/:id',component: ProdutoDeleteComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
