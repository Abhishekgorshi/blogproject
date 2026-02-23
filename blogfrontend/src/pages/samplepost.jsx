import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Nav from "../components/navBar";
import { useParams } from "react-router-dom";

function SamplePost(){
const {pId} = useParams();
const [post,setPost] = useState(null);
console.log(post)
  useEffect(() => {
    fetch(`http://localhost:8000/api/client/viewBlog/${pId}`)
    .then(res => res.json())
    .then(response => {
      if(response.success == true){
       setPost(response.data);
      }
    })
      .catch(err=>
        console.log("error"+err)
      )
  },[pId])
console.log("post",post)
  return(
<>
<Nav/>
  {post && ( <header class="masthead" style={{ backgroundImage: `url(http://localhost:8000/${post.image})`}}>
            <div class="container position-relative px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <div class="post-heading">
                            <h1>{post.title}</h1>
                            <h2 class="subheading">Problems look mighty small from 150 miles up</h2>
                            <span class="meta">
                                Posted by
                                <a href="#!">Start Bootstrap</a>
                                on August 24, 2023
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
       )}
    <div>
      <div >
       {post ? (
          <div>  
        
                 <p>{post.title}</p>
                 <p>{post.image}</p>
                 <p>{post.description}</p>
       </div>
                ) : (
        <p>Loading...</p>
      )}
</div>
</div>
<Footer/>
</>
  )
}
export default SamplePost;