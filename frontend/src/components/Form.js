import React, { useState } from "react"
import { useDispatch } from 'react-redux'
import { createPost,updatePost,deletePost } from '../actions/post';

const Form = () => {

  const id="636e550c4435af6b4fe23a9e"

  const [postData,setPostData]=useState({
    creator:'',
    title:'',
    message:'',
    tags:'',
  })

  const dispatch=useDispatch();


  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(createPost(postData));
  }

  const handleGüncelle=(e)=>{
    e.preventDefault();
    dispatch(updatePost(id,postData));
  }

  const deletePostıd=()=>{
    dispatch(deletePost(id))
  }
  


  return (
    <div>
      <div>
        <form  onSubmit={handleSubmit}>
        <div className="input-group input-group-sm mb-3">
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="oluşturan"
            value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
          />
        </div>
        <div className="input-group input-group-sm mb-3">
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="başlık"
            value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })}
          />
        </div>
        <div className="input-group input-group-sm mb-3">
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="mesaj"
            value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      </div>


      <div>
      <form  onSubmit={handleGüncelle}>
        <div className="input-group input-group-sm mb-3">
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="oluşturan"
            value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
          />
        </div>
        <div className="input-group input-group-sm mb-3">
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="başlık"
            value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })}
          />
        </div>
        <div className="input-group input-group-sm mb-3">
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="mesaj"
            value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      </div>

      <button onClick={deletePostıd}>Sil</button>
      
    </div>
  );
};

export default Form;
