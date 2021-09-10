import { CategoriaService } from './../../service/categoria.service';
import { AuthService } from './../../service/auth.service';
import { ProdutoReq } from './../../model/ProdutoReq';
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/service/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-produto-delete',
  templateUrl: './produto-delete.component.html',
  styleUrls: ['./produto-delete.component.css']
})
export class ProdutoDeleteComponent implements OnInit {

  produto: ProdutoReq = new ProdutoReq()
  idProduto: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
    private authService: AuthService,
    private categoriaService: CategoriaService
  ) {}

  ngOnInit() {
    window.scroll(0,0)

    if(environment.token == '') {
      alert('Sua sessão expirou, faça o login novamente.')
      this.router.navigate(['/entrar'])
    }

    this.authService.refreshToken()
    this.produtoService.refreshToken()
    this.categoriaService.refreshToken()

    this.idProduto = this.route.snapshot.params['id']
    this.findProdutoById(this.idProduto)
  }

  findProdutoById(id: number) {
    this.produtoService.getByIdProduto(id).subscribe((resp: ProdutoReq)=> {
      this.produto = resp
    })
  }

  apagarProduto(){
    this.produtoService.deleteProdutos(this.idProduto).subscribe(()=>{
      alert('produto apagada com sucesso!')
      this.router.navigate(['/inicio'])
    })
  }

}
