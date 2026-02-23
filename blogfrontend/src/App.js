import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import BlogForm from "./components/blogForm";
import Home from "./pages/home";
import SamplePost from "./pages/samplepost";
import Contact from "./pages/contact";

function App () {
      
   return(
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About />} />
      <Route path="/post/:pId" element={<SamplePost />} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/blogForm" element={<BlogForm />} />
      
    </Routes>
    </>
  )
}

export default App ;