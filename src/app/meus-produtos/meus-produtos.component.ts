import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { ProdutoReq } from './../model/ProdutoReq';
import { UsuarioReq } from '../model/UsuarioReq';
import { AuthService } from '../service/auth.service';
import { CategoriaReq } from '../model/CategoriaReq';
import { ProdutoService } from '../service/produto.service';
import { CategoriaService } from '../service/categoria.service';


@Component({
  selector: 'app-meus-produtos',
  templateUrl: './meus-produtos.component.html',
  styleUrls: ['./meus-produtos.component.css']
})
export class MeusProdutosComponent implements OnInit {

  produto: ProdutoReq = new ProdutoReq();
  listaPostagens: ProdutoReq[];

  categoria: CategoriaReq = new CategoriaReq();
  listaCategorias: CategoriaReq[];
  idCategoria: number;

  usuario: UsuarioReq = new UsuarioReq();
  idUsuario = environment.id;

  constructor(
    private categoriaService: CategoriaService,
    private produtoService: ProdutoService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    window.scroll(0,0);
     console.log(this.usuario.produto)
    if (environment.token == "") {
      alert("Sua sesão expirou")
      this.router.navigate(["/inicio"]);
    }
    this.categoriaService.refreshToken();
    this.produtoService.refreshToken();
    this.authService.refreshToken()
   
    this.findByIdUsuario();
  }

  findByIdUsuario() {
    this.authService.getByUsuario(this.idUsuario).subscribe((resp: UsuarioReq)=>{
      this.usuario = resp;
    });
  }

}