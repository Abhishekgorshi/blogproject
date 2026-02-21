import Nav from "./components/navBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Blog from "./components/blog";
import About from "./components/About";
import { Route, Routes } from "react-router-dom";
import State from "./components/State";
import Form from "./components/Form";
import BlogForm from "./components/blogForm";
import { useState, useEffect } from "react";
import PostItem from "./components/PostItem";
import Parent from "./components/Parent";

function App () {
  const initialNumber = 4;
  const [data,setData] = useState([]);
    
    useEffect(() =>{
      fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => { console.log("fetch data :", json);
      setData(json.slice(0,3))});
    },[]);
  
  return(
    <>
    <Nav />
    <Header/>
    <Routes>
      <Route path="/" element={<Blog data={data} />} />
      <Route path="/about" element={<About />} />
      <Route path="/test" element={<State countValue={initialNumber} />} />
      <Route path="/form" element={<Form />} />
      <Route path="/blogForm" element={<BlogForm />} />
      <Route path="/postItem" element={<PostItem />} />
      <Route path="/parent" element={<Parent />} />
      <Route path="/blog/view/:id" element={<Parent />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App ;