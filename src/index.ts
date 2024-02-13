import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();

app.use(cors({
    credentials: true
}))

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const servidor = http.createServer(app);

const MONGODB_URL = "mongodb+srv://bruno2:fU6F4B46Cm5oM1Ya@cluster0.nms6aua.mongodb.net/typescript_api?retryWrites=true&w=majority";

servidor.listen(8080, () => {
    console.log("Servidor rodando no endereço http://localhost:8080/")
})

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URL);
mongoose.connection.on("error", (erro: Error) => console.log(erro))
