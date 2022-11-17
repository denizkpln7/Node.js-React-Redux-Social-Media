import { useEffect } from "react";
import axios from "axios";
import Form from "./components/Form";
import Post from "./components/Posts";

import { useDispatch } from "react-redux";
import { getPosts } from "./actions/post";

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./pages/Home";
import { Signin } from "c:/users/deniz/downloads/38-signin+sayfasını+oluşturma";
import Sing from "./pages/Sing";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>

      {/* <Post />
      <Form /> */}
    <Sing/>
    </div>
  );
}

export default App;
