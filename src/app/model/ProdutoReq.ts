
import { UsuarioReq } from './UsuarioReq';
import { CategoriaReq } from './CategoriaReq';
export class ProdutoReq {

    public id: number;
    public nome: string;
    public preco: number;
    public imagem: string;
    public quantidade: number;
    public dtValidade:Date;
    public usuario: UsuarioReq;
    public categoria: CategoriaReq;
}
