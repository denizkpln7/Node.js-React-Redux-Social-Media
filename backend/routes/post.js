import express from 'express'
const router=express.Router();
import { getPosts,createPost,updatePost,deletePost,getPostsBySearch } from '../controllers/post.js';
import auth from '../middleware/auth.js'


router.get('/',auth,getPosts)
router.post('/',auth,createPost)
router.patch('/:id',auth,updatePost)
router.delete('/:id',auth,deletePost)
router.get('/search',auth,getPostsBySearch)




export default router;