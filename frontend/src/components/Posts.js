
import { useSelector } from 'react-redux'
import post from '../reducers/post';

export default function Posts() {

  const posts=useSelector((state)=>{
    return state.posts
  })

  console.log(posts);

  return (
    <div>
      <div className='container'>
        <div className='row'>
           {posts.map((p)=>(
            <div className="card" >
            <div className="card-body">
              <h5 className="card-title">{p.creator}</h5>
              <p className="card-text">{p.message}</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
           ))}
        </div>
      </div>
    </div>
  )
}