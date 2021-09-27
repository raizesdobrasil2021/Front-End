import { ProdutoService } from 'src/app/service/produto.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProdutoReq } from '../model/ProdutoReq';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {
  busca: string
  produto: ProdutoReq = new ProdutoReq()
  listaProdutos : ProdutoReq[]

  constructor(private route: ActivatedRoute, private produtoService: ProdutoService) { }

  ngOnInit() {
    window.scroll(0, 0)
    this.busca = this.route.snapshot.params["busca"]
    this.pesquisa()
  }

  pesquisa() {
    this.produtoService.getByNomeProduto(this.busca).subscribe((resp: ProdutoReq[]) => {
      this.listaProdutos = resp
    })
  }
}