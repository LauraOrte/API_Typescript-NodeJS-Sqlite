import bodyParser from 'body-parser';
import { createTable } from './Controllers/User';

import express, { Request, Response } from 'express';

const PORT = process.env.POR || 8000;

const app = express();
app.use(bodyParser.json());

import router from './routes'
app.use(router); 

createTable();


app.get('/users', (req: Request, res: Response)=>{
    res.json({
        msg: 'Todo ok'
    })
})

app.post('/users', (req: Request, res: Response)=>{
    console.log(req.body);
    res.json({
        msg: 'Todo ok'
    })
}) 

app.listen(PORT, () => console.log('Servidor inicializado en el puerto ' + PORT));

