import { useContext } from "react";
import { AppContext } from "../context/context";
import {Link} from 'react-router-dom';

function Blog() {
const {blogs} = useContext(AppContext);
   
   return (
      <div className="container px-4 px-lg-5">
         <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
                  {
                     blogs.map((b) => 
                        <div key={b._id}>
                        <p>{b.title}</p>
                        <p>{b.description}</p>
                       <Link to={`/post/${b._id}`}> <img src={`http://localhost:8000/${b.image}`} alt="postimage"/>
                        </Link>
                        </div>
                     )
                  }
                <div className="d-flex justify-content-end mb-4"><a class="btn btn-primary text-uppercase" href="#!">Older Posts →</a><p></p></div> 
            </div>
         </div>
      </div>
   )
}

export default Blog;