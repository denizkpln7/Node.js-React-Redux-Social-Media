import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import postRoutes from './routes/post.js'
import userRoutes from './routes/users.js'
const app=express()

app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({limit:"30mb",extended:true})); 											   
app.use(cors());

const connect = async () => {
    try {
      await mongoose.connect("mongodb+srv://deniz:deniz@cluster0.dzdbj.mongodb.net/test?retryWrites=true&w=majority");
      console.log("Connected to mongoDB.");
    } catch (error) {
      throw error;
    }
  };
  
  mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
  });


app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

app.use("/post",postRoutes);
app.use("/user",userRoutes);

app.listen(4000,()=>{
    connect()
    console.log("backend çalışıyor")
})