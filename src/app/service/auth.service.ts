import { UsuarioReq } from './../model/UsuarioReq';
import { UsuarioLogin } from './../model/UsuarioLogin';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ProdutoReq } from '../model/ProdutoReq';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  [x: string]: any;

  usuario: UsuarioReq = new UsuarioReq();

  constructor(private http: HttpClient) {}

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  };

  refreshToken() {
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token),
    };
  }

  entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin> {
    return this.http.post<UsuarioLogin>(
      'https://raizesdobrasil.herokuapp.com/usuarios/logar',
      usuarioLogin
    );
  }

  cadastrar(usuario: UsuarioReq): Observable<UsuarioReq> {
    return this.http.post<UsuarioReq>(
      'https://raizesdobrasil.herokuapp.com/usuarios/cadastrar',
      usuario
    );
  }

  admin() {
    let ok: boolean = false;
    if (environment.tipo == 'admin') {
      ok = true;
    }
    return ok;
  }


  logado() {
    let ok: boolean = false;
    if (environment.token != '') {
      ok = true;
    }
    return ok;
  }

  deslogado() {
    let ok: boolean = true;

    if (environment.token != '') {
      ok = false;
    }

    return ok;
  }
}
