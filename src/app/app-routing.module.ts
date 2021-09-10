import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroProdutoComponent} from './cadastro-produto/cadastro-produto.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ProdutoEditComponent } from './edit/produto-edit/produto-edit.component';
import { UsuarioEditComponent } from './edit/usuario-edit/usuario-edit.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { ProdutoComponent } from './produto/produto.component';
import { TodosProdutosComponent } from './produto/todos-produtos/todos-produtos.component';

const routes: Routes = [
  {path:'', redirectTo:'produto-edit/:id', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'cadastro', component: CadastroComponent},
  {path:'inicio',component: InicioComponent},
  {path:'produto/:id',component:ProdutoComponent},
  {path:'categoria/:id',component:CategoriaComponent},
  {path:'categoria',component:CategoriaComponent},
  {path:'cadastro-produto',component:CadastroProdutoComponent},
  {path: 'todos-produtos',component:TodosProdutosComponent},
  {path: 'produto-edit/:id',component: ProdutoEditComponent},
  {path: 'usuario-edit/:id',component: UsuarioEditComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
