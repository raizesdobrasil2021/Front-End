import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaReq } from '../model/CategoriaReq';
import { ProdutoReq } from '../model/ProdutoReq';
import { UsuarioReq } from '../model/UsuarioReq';
import { AuthService } from '../service/auth.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {
  produto: ProdutoReq = new ProdutoReq()
  categoria: CategoriaReq= new CategoriaReq()
  listaCategoria: CategoriaReq[]
  usuario: UsuarioReq = new UsuarioReq()
  idCategoria: number
  idUsuario:number

  constructor(
    private router: Router,
    private authService: AuthService,
    private produtoService:ProdutoService,
    private categoriaService:CategoriaService
  ) { }
    
  ngOnInit() {
    window.scroll(0, 0);
  }
  cadastrarProduto() {
    this.categoria.id = this.idCategoria
    this.produto.categoria = this.categoria

    this.usuario.id = this.idUsuario
    this.produto.usuario = this.usuario

    this.produtoService.postProdutos(this.produto).subscribe((resp: ProdutoReq) => {
      this.produto = resp
      alert("Cadastrado com sucesso")
      this.produto = new ProdutoReq
      this.router.navigate(['/meus-produtos'])
    }, erro => {
        alert("Preecha os campos corretamente")
    })

  }

}



