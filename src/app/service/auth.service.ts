import { UsuarioLogin } from './../model/UsuarioLogin';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioReq } from '../model/UsuarioReq';
import { environment } from 'src/environments/environment.prod';
import { ProdutoReq } from '../model/ProdutoReq';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;

  constructor(
    private http: HttpClient
  ) { }
  
  token = { 
    headers: new HttpHeaders().set("Authorization", environment.token) }

  refreshToken() {
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
  }

  entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin> {
    return this.http.post<UsuarioLogin>('https://raizesdobrasil.herokuapp.com/usuarios/logar', usuarioLogin)
  }

  cadastrar(usuario: UsuarioReq): Observable<UsuarioReq> {
    return this.http.post<UsuarioReq>('https://raizesdobrasil.herokuapp.com/usuarios/cadastrar', usuario)
  }

  getByUsuario(id: number): Observable<UsuarioReq> {
    return this.http.get<UsuarioReq>(`https://raizesdobrasil.herokuapp.com/usuarios/${id}`,this.token)
  }

  logado() {
    let ok: boolean = false;
    if (environment.token != "") {
      ok = true
    }
    return ok


cadastrar(usuario: UsuarioReq): Observable<UsuarioReq>{
  return this.http.post<UsuarioReq>('https://raizesdobrasil.herokuapp.com/usuarios/cadastrar', usuario)
}

logado(){
  let ok: boolean =false;
  if(environment.token !=""){
    ok=true
  }
  return ok

}
