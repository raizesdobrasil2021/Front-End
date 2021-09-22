import { UsuarioReq } from './../model/UsuarioReq';
import { ProdutoReq } from 'src/app/model/ProdutoReq';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from '../service/auth.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  produto: ProdutoReq = new ProdutoReq

  usuario: UsuarioReq = new UsuarioReq()

  nome = environment.nome
  token = environment.token
  id = environment.id
  tipo = environment.tipo
  //tipoUsuario = this.usuario.tipo.
  //tipoAdministrador = environment.tipoAdministrador
  busca: string


  constructor(
    private http: HttpClient,
    private router: Router,
    public authService: AuthService,
    private categoriaService: CategoriaService,
    private produtoService: ProdutoService
  ) { }

  ngOnInit(){ }

  refresh2(idCat: number){
    this.router.navigateByUrl('/home', { skipLocationChange: true }).then(() =>{
         this.router.navigate(['/categoria',idCat])
    })
  }

  refresh(){
      this.router.navigateByUrl('/home', { skipLocationChange: true }).then(() =>{
           this.router.navigate(["/pesquisa",this.busca])
      })
  }
    sair () {
      environment.token = ""
      environment.nome = ""
      environment.id = 0
      environment.tipo = ""
      this.router.navigate(["/home"])
      alert("Sessão finalizada")
    }

  }

