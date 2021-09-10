import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoReq } from 'src/app/model/ProdutoReq';

import { UsuarioReq } from 'src/app/model/UsuarioReq';
import { AuthService } from 'src/app/service/auth.service';
import { CategoriaService } from 'src/app/service/categoria.service';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-todos-produtos',
  templateUrl: './todos-produtos.component.html',
  styleUrls: ['./todos-produtos.component.css'],
})
export class TodosProdutosComponent implements OnInit {
  produto: ProdutoReq = new ProdutoReq();
  listaProdutos: ProdutoReq[];
  usuario: UsuarioReq = new UsuarioReq();

  constructor(
    private router: Router,
    private categoriaService: CategoriaService,
    private authService: AuthService,
    private produtoService: ProdutoService
  ) {}

  ngOnInit() {
    window.scroll(0, 0);

    this.authService.refreshToken();
    this.produtoService.refreshToken();
    this.categoriaService.refreshToken();

    this.findAllProdutos()
  }

  findAllProdutos() {
    this.produtoService.getAllProdutos().subscribe((resp: ProdutoReq[]) => {
      this.listaProdutos = resp;
    });
  }
}
