import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { CategoriaReq } from '../model/CategoriaReq';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  categoria: CategoriaReq = new CategoriaReq()
  
  listaCategoria:CategoriaReq[]

  constructor(
    private router: Router,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit() {
    if (environment.token == "") {
      this.router.navigate(['/entrar'])
    }

  this.findAllCategorias()
  }

  findAllCategorias() {
    this.categoriaService.getAllCategoria().subscribe((resp: CategoriaReq[]) => {
      this.listaCategoria = resp
    })
  }

  cadastrarCategoria() {
    this.categoriaService.postCategoria(this.categoria).subscribe((resp: CategoriaReq) => {
      this.categoria = resp
      alert('Categoria cadastrado com sucesso!')
      this.findAllCategorias()
      this.categoria = new CategoriaReq()
    })
  }
}
