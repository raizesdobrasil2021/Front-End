import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { CategoriaReq } from '../model/CategoriaReq';
import { ProdutoReq } from '../model/ProdutoReq';
import { UsuarioReq } from '../model/UsuarioReq';
import { AuthService } from '../service/auth.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  produto: ProdutoReq = new ProdutoReq()
  listaProduto: ProdutoReq[]


  categoria: CategoriaReq = new CategoriaReq()
  idCategoria: number
  listaCategoria: CategoriaReq[]

  usuario: UsuarioReq = new UsuarioReq()
  idUsuario = environment.id

  constructor(
    private router: Router,
    private produtosService: ProdutoService,
    private categoriaService: CategoriaService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    window.scroll(0, 0)

    this.getAllCategoria()
    
  }

  getAllCategoria() {
    this.categoriaService.getAllCategoria().subscribe((resp: CategoriaReq []) => {
      this.listaCategoria = resp
    })
  }

  findByIdCategoria() {
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: CategoriaReq) => {
      this.categoria = resp
    })
  }

  findByIdUsuario() {
    this.authService.getByUsuario(this.idUsuario).subscribe((resp: UsuarioReq) => {
      this.usuario = resp
    })
  }


}