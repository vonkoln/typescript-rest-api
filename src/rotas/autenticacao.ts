import { registrar } from "controladores/autenticacao";
import { Express } from "express";

export default (rotas: Express.Router) => {
    rotas.post('/autenticacao/registrar', registrar);
}