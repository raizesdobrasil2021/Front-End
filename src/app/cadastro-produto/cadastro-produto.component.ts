import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { CategoriaReq } from '../model/CategoriaReq';
import { ProdutoReq } from '../model/ProdutoReq';
import { UsuarioReq } from '../model/UsuarioReq';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';
import { AuthService } from '../service/auth.service';



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
  idCategoria : number
  idUsuario = environment.id
  
  constructor(
    private router: Router,
    private produtoService:ProdutoService,
    private authService: AuthService,
    private categoriaService: CategoriaService
    
  ) { }
    
  ngOnInit() {

    if (environment.token == "") {
      this.router.navigate(['/login'])
    }

    window.scroll(0, 0);
    
    this.authService.refreshToken()
    this.produtoService.refreshToken()
    this.categoriaService.refreshToken()
  }
 
// Eu coloquei uma função produto categoria para receber do java Script
  produtoCategoria(event: any){
    this.idCategoria = event.target.value
    console.log(this.categoria)
  }
  findAllCategoria(){
    this.categoriaService.getAllCategoria().subscribe((resp: CategoriaReq[])=>{
      this.listaCategoria = resp
    })
  }
  
  cadastrarProduto() {
    this.categoria.id = this.idCategoria
    this.usuario.id = this.idUsuario
    this.produto.categoria = this.categoria
    this.produto.usuario = this.usuario
    
console.log(this.produto)

    this.produtoService.postProdutos(this.produto).subscribe((resp: ProdutoReq) => {
      this.produto = resp
      alert("Cadastrado com sucesso")
      this.findAllCategoria()
      this.produto = new ProdutoReq
      this.router.navigate(['/todos-produtos'])
    }, erro => {
        alert("Preecha os campos corretamente")
    })

  }

}



