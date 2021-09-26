import { CategoriaService } from './../service/categoria.service';
import { ProdutoReq } from './../model/ProdutoReq';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioReq } from '../model/UsuarioReq';
import { AuthService } from '../service/auth.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  produto: ProdutoReq = new ProdutoReq()
  usuario: UsuarioReq = new UsuarioReq()
  quantidade: number
  idUsuario: number
  listaProdutos: ProdutoReq[]

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public authService: AuthService,
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,

  ) { }

  ngOnInit() {
    window.scroll(0, 0)

    this.authService.refreshToken()
    this.produtoService.refreshToken()
    this.categoriaService.refreshToken()

    let id = this.route.snapshot.params['id']
    this.findByProdutoId(id)

  }
  findByProdutoId(id: number) {
    this.produtoService.getByIdProduto(id).subscribe((resp: ProdutoReq) => {
      this.produto = resp
    })
  }
}
