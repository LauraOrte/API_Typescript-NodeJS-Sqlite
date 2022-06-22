import { Request, Response } from 'express';
import { openDb } from '../configDB';

const createTable = async()=>{
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS User ( id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, edad INTEGER )')
    })
}

const selectUsers = async(req: Request, res: Response)=>{
    openDb().then(db=>{
        db.all('SELECT * FROM User')
        .then(users=> res.json(users))
    });
}

const selectUser=async (req: Request, res: Response) => {
    
    let id = req.body.id;
    openDb().then(db=>{
        db.get('SELECT * FROM User WHERE id=?', [id])
        .then(user=> res.json(user) );
    });
}


const insertUser = async (req: Request, res: Response)=>{
    let user = req.body;
    openDb().then(db=>{
        db.run('INSERT INTO User (name, edad) VALUES (?,?)', [user.name, user.edad]);
    });
    res.json({
        "statusCode": 200
    })
}

const updateUser= async (req: Request, res: Response)=>{
    let user = req.body;
    openDb().then(db=>{
        db.run('UPDATE User SET name=?, edad=? WHERE id=?', [user.name, user.edad, user.id]);
    });
    res.json({
        "statusCode": 200
    })
}

const deleteUser = async(req: Request, res: Response)=>{
    let id = req.body.id;
    openDb().then(db=>{
        db.get('DELETE FROM User WHERE id=?', [id])
        .then(res=>res)
    });
    res.json({
        "statusCode": 200
    })
}

export const controllersUser = {
    createTable,
    selectUsers,
    selectUser,
    insertUser,
    updateUser,
    deleteUser

}