import { openDb } from '../configDB';

export async function createTable(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS User ( id INTEGER AUTO_INCREMENT PRIMARY KEY , name TEXT, edad INTEGER )')
    })
}

export async function selectUsers(req, res){
    openDb().then(db=>{
        db.all('SELECT * FROM User')
        .then(users=>  res.json(users))
    });
}

export async function selectUser(req, res){
    let id = req.body.id;
    openDb().then(db=>{
        db.get('SELECT * FROM User WHERE id=?', [id])
        .then(user=> res.json(user) );
    });
}


export async function insertUser(req, res){
    let user = req.body;
    openDb().then(db=>{
        db.run('INSERT INTO User (name, edad) VALUES (?,?)', [user.name, user.edad]);
    });
    res.json({
        "statusCode": 200
    })
}

export async function updateUser(req, res){
    let user = req.body;
    openDb().then(db=>{
        db.run('UPDATE User SET name=?, edad=? WHERE id=?', [user.name, user.edad, user.id]);
    });
    res.json({
        "statusCode": 200
    })
}

export async function deleteUser(req, res){
    let id = req.body.id;
    openDb().then(db=>{
        db.get('DELETE FROM User WHERE id=?', [id])
        .then(res=>res)
    });
    res.json({
        "statusCode": 200
    })
}