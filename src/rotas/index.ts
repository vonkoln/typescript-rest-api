import { Express } from "express";
import autenticacao from "./autenticacao";

const rotas = Express.Router();

export default (): Express.Router => {
    autenticacao(rotas);
    return rotas
}