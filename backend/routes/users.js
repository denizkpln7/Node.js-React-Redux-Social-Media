import express from 'express'
const router=express.Router();
import { signin,singup } from '../controllers/users.js';



router.post('/signin',signin)
router.post('/singup',singup)





export default router;