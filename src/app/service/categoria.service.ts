import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { CategoriaReq } from '../model/CategoriaReq';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(
    private http:HttpClient
  ) { }

  token={
    headers:new HttpHeaders().set('Authorization',environment.token)
  }

  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
  }

  getAllCategoria():Observable<CategoriaReq[]>{
    return this.http.get<CategoriaReq[]>("https://raizesdobrasil.herokuapp.com/categorias")
  }
  getByIdCategoria(id:number):Observable<CategoriaReq>{
    return this.http.get<CategoriaReq>(`https://raizesdobrasil.herokuapp.com/categorias/${id}`)
  }

  getAtivoCategoria(ativo:boolean):Observable<CategoriaReq>{
    return this.http.get<CategoriaReq>(`https://raizesdobrasil.herokuapp.com/categorias/ativo/${ativo}`)
  }
  getDescricaoCategoria(descricao:string):Observable<CategoriaReq>{
    return this.http.get<CategoriaReq>(`https://raizesdobrasil.herokuapp.com/categorias/decricao/${descricao}`)
  }

  postCategoria(categoria: CategoriaReq): Observable<CategoriaReq>{
    return this.http.post<CategoriaReq>('https://raizesdobrasil.herokuapp.com/categorias', categoria, this.token)
  }

  putCategoria(categoria: CategoriaReq): Observable<CategoriaReq>{
    return this.http.put<CategoriaReq>('https://raizesdobrasil.herokuapp.com/categorias', categoria, this.token)
  }

  deleteCategoria(id: number) {
    return this.http.delete(`https://raizesdobrasil.herokuapp.com/categorias/${id}`, this.token)
  }

}
