import PostMessage from "../models/PostModels.js"

export const getPosts=async (req,res)=>{

    try {
        const postMessage=await PostMessage.find();
        res.status(200).json(postMessage)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

export const createPost=async (req,res)=>{

    const post=req.body;

    const newPost=new PostMessage(post);

    try {

        await newPost.save();
        res.status(201).json(newPost)
        
    } catch (error) {
        res.status(409).json({message:error.message})
    }
	
	
}

export const updatePost=async (req,res)=>{
    const post=req.body;
    const id=req.params.id
    try {

      const guncelPost = await PostMessage.findByIdAndUpdate({_id:id},post,{new:true});
        res.status(201).send(guncelPost)
        
    } catch (error) {
        res.status(409).json({message:error.message})
    }
	
}

export const deletePost=async (req,res)=>{
    const id=req.params.id
    try {

      const deletePost = await PostMessage.findByIdAndDelete({_id:id});
        res.status(201).send(deletePost)
        
    } catch (error) {
        res.status(409).json({message:error.message})
    }
	
}

export const getPostsBySearch=async (req,res)=>{
    const {searchQuery}=req.query
    try {

      const title = new RegExp(searchQuery,"i");
      const post=PostMessage.find({title:title})
      res.status(201).send(post)
        
    } catch (error) {
        res.status(409).json({message:error.message})
    }
	
}