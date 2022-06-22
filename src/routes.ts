import { Router } from "express";
import { createTable, deleteUser, insertUser, selectUser, selectUsers, updateUser} from './Controllers/User';

const router = Router();

router.get('/', (req, res)=>{
    res.json({
        "statusCode": 200,
        "msg": "Api Rodando"
    })
})

router.get('/users', selectUsers);
router.get('/user', selectUser);
router.post('/user', insertUser);
router.put('/user', updateUser);
router.delete('/user', deleteUser);

export default router;