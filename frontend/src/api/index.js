import axios from 'axios'
const API=axios.create({baseURL:'http://localhost:4000'})

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.Authorization=`Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }

    return req;
})

export const postlarGetir=()=>axios.get("/post");

export const postOlustur=(newPost)=>API.post(url,newPost);
export const postGuncelle=(id,updatedPost)=>API.patch(`${url}/${id}`,updatedPost)
export const postSil=(id)=>API.delete(`${url}/${id}`)
export const search=(searchData)=>axios.post('/post/signup',{params:searchData})


export const girisYap=(formData)=>axios.post('/user/signin',formData)

export const uyeOl=(formData)=>axios.post('/user/signup',formData)

