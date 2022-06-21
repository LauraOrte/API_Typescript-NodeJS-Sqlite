import createTable from './controllers/User';
import bodyParser from 'body-parser';

import express, { Request, Response } from 'express';

const PORT = process.env.POR || 8080;

const app = express();
app.use(bodyParser.json());




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

