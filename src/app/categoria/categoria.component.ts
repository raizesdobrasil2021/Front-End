import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { CategoriaReq } from '../model/CategoriaReq';
import { ProdutoReq } from '../model/ProdutoReq';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  produto: ProdutoReq = new ProdutoReq()
  listaProduto: ProdutoReq[]
  categoria: CategoriaReq = new CategoriaReq()
  listaCategoria:CategoriaReq[]
  idCategoria: number

  constructor(

    private categoriaService: CategoriaService,
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    //if (environment.token == "") {
      //this.router.navigate(['/login'])
     //}
    window.scroll(0, 0);

    this.produtoService.refreshToken()
    this.categoriaService.refreshToken()

    this.idCategoria = this.route.snapshot.params['id']
    this.findByIdCategoria()
    this.findAllProdutos()
    this.findAllCategorias()
  }

  findAllCategorias() {
    this.categoriaService.getAllCategoria().subscribe((resp: CategoriaReq[]) => {
      this.listaCategoria = resp
    })
  }
  findByIdCategoria() {
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: CategoriaReq) => {
      this.categoria = resp
    })
  }
  findAllProdutos() {
    this.produtoService.getAllProdutos().subscribe((resp: ProdutoReq[]) => {
      this.listaProduto = resp
    })
  }


}
