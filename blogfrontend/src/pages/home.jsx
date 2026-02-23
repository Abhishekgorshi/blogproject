import Blog from "../components/blog";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/navBar";

function Home(){
  return(
    <>
    <Nav/>
    <Header/>
    <Blog />
    <Footer/>
    </>
  )
}
export default Home;