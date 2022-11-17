import React, { useEffect, useState } from "react";

import { useDispatch } from 'react-redux';
import { signin } from "../actions/auth";

import decode from 'jwt-decode'

const Sing = () => {
  const initialState = { email: "", password: "" };
  const [form, setForm] = useState(initialState);
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const dispatch=useDispatch()  

  const handleSubmit = (e) => {
    e.preventDefault();
   dispatch(signin(form))
    
  };

  useEffect(() => {
   const token=JSON.parse(localStorage.getItem("profile"))?.token
  if(token){
    const decodedTken=decode(token)
    if(decodedTken.exp*1000<new Date().getTime()){
        outUp()
    }
  }

  }, [])
  

  const outUp=()=>{
    dispatch({type:LOGOUT})
    localStorage.removeItem("profile");
  }

  return (
    <div>
      <ınput
        name="email"
        label="Email Adresiniz"
        type="email"
        onChange={handleChange}
      />
      <ınput name="password" label="Parolanız" onChange={handleChange} />
      <button onClick={handleSubmit}>tıkla</button>
      <button onClick={outUp}>Çıkış Yap</button>
    </div>
  );
};

export default Sing;
