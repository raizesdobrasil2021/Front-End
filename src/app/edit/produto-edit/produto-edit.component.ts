import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoriaReq } from 'src/app/model/CategoriaReq';
import { ProdutoReq } from 'src/app/model/ProdutoReq';

import { AuthService } from 'src/app/service/auth.service';
import { CategoriaService } from 'src/app/service/categoria.service';
import { ProdutoService } from 'src/app/service/produto.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-produto-edit',
  templateUrl: './produto-edit.component.html',
  styleUrls: ['./produto-edit.component.css']
})
export class ProdutoEditComponent implements OnInit {

  produto: ProdutoReq = new ProdutoReq()
  categoria: CategoriaReq= new CategoriaReq()
  listaCategoria: CategoriaReq[]
  listaProdutos: ProdutoReq[]
  idCategoria : number

  constructor(
    private router: Router,
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private route: ActivatedRoute,
    private authService: AuthService,
    ) { }

  ngOnInit() {
    window.scroll(0,0)

    if (environment.token == "") {
      this.router.navigate(['/login'])
    }

    window.scroll(0, 0);

    this.authService.refreshToken()
    this.produtoService.refreshToken()
    this.categoriaService.refreshToken()

    let item = this.route.snapshot.params['id']
    this.findProdutoById(item)

    this.getAllCategoria()
    this.findAllCategorias()
  }
  produtoCategoria(event: any){
    this.idCategoria = event.target.value
    console.log(this.categoria)
  }

  getAllCategoria() {
    this.categoriaService.getAllCategoria().subscribe((resp: CategoriaReq[])=> {
      this.listaCategoria = resp
    })
  }

  findByIdCategoria() {
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: CategoriaReq)=> {this.categoria = resp
    })
  }

  findAllCategorias(){
    this.categoriaService.getAllCategoria().subscribe((resp: CategoriaReq[])=> {
      this.listaCategoria = resp
    })
  }

  findProdutoById(id: number) {
    this.produtoService.getByIdProduto(id).subscribe((resp: ProdutoReq)=> {
      this.produto = resp
    })
  }

  atualizarProduto(){
    this.categoria.id = this.idCategoria
    this.produto.categoria = this.categoria

    this.produtoService.putProdutos(this.produto).subscribe((resp: ProdutoReq)=>{
      this.produto = resp
      alert("Produto editado com sucesso")
      this.router.navigate(['/inicio'])
    })
  }


}
