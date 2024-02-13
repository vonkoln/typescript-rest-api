import crypto from 'crypto';

const CHAVE_SECRETA = "segredo";

export const aleatorio = () => crypto.randomBytes(128).toString('base64');

export const autenticacao = (salt: string, senha: string) => {
    return crypto.createHmac('sha256', [salt, senha].join('/')).update(CHAVE_SECRETA ).digest('hex');
}