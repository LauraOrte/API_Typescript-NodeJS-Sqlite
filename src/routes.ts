import { Router } from "express";
import { controllersUser} from './Controllers/User';

const router = Router();

router.get('/', (req, res)=>{
    res.json({
        "statusCode": 200,
        "msg": "Api Rodando"
    })
})

router.get('/users', controllersUser.selectUsers);
router.get('/user', controllersUser.selectUser);
router.post('/user', controllersUser.insertUser);
router.put('/user', controllersUser.updateUser);
router.delete('/user', controllersUser.deleteUser);

export default router;