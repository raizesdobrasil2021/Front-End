import { ProdutoReq } from './ProdutoReq';

export class CategoriaReq {

  public id: number;
  public ativo: boolean;
  public descricao: string;
  public palavraChave: string;
  public produto: ProdutoReq[];
}
