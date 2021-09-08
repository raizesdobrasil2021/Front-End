import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProdutoReq } from '../model/ProdutoReq';
import { UsuarioReq } from '../model/UsuarioReq';
import { AuthService } from '../service/auth.service';
import { CategoriaService } from '../service/categoria.service';
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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private produtoService: ProdutoService,

  ) { }

  ngOnInit() {
    window.scroll(0, 0)
    let id = this.route.snapshot.params['id']
    this.findByProdutoId(id)

  }
  findByProdutoId(id: number) {
    this.produtoService.getByIdProduto(id).subscribe((resp: ProdutoReq) => {
      this.produto = resp
    })
  }

}
