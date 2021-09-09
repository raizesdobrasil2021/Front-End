import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { CategoriaReq } from '../model/CategoriaReq';
import { ProdutoReq } from '../model/ProdutoReq';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

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


  getAllProdutos():Observable<ProdutoReq[]>{
    return this.http.get<ProdutoReq[]>("https://raizesdobrasil.herokuapp.com/produtos",this.token)
  }
  getByIdProduto(id:number):Observable<ProdutoReq>{
    return this.http.get<ProdutoReq>(`https://raizesdobrasil.herokuapp.com/produtos/${id}`,this.token)
  }
  getByNomeProduto(nome:string):Observable<ProdutoReq[]>{
    return this.http.get<ProdutoReq[]>(`https://raizesdobrasil.herokuapp.com/produtos/nome/${nome}`,this.token)
  }

  // IMPORTANTE! Perguntar depois para o thiago como fazer o entre preços

  getByEntrePreco(preco1:number, preco2:number):Observable<ProdutoReq>{
    return this.http.get<ProdutoReq>(`https://raizesdobrasil.herokuapp.com/produtos/entre-preco/${preco1}/${preco2}`,this.token)
}


  getByMenorPreco(preco:number):Observable<ProdutoReq>{
    return this.http.get<ProdutoReq>(`https://raizesdobrasil.herokuapp.com/produtos/menor-preco/${preco}`,this.token)
  }

  postProdutos(produto: ProdutoReq): Observable<ProdutoReq>{
    return this.http.post<ProdutoReq>('https://raizesdobrasil.herokuapp.com/produtos', produto, this.token)
  }

  putProdutos(produto: ProdutoReq): Observable<ProdutoReq>{
    return this.http.put<ProdutoReq>('https://raizesdobrasil.herokuapp.com/produtos', produto, this.token)
  }

  deleteProdutos(id: number) {
    return this.http.delete(`https://raizesdobrasil.herokuapp.com/produtos/${id}`, this.token)
  }

}
