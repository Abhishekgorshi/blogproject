import PostItem from "./PostItem";


function Blog({data}) {

   console.log("data is",data);
   return (
      <div className="container px-4 px-lg-5">
         <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
                  {
      // data.slice(0,8).map(post => (<>
      //   <p key={post.userId}>{post.userId}</p>
      //   <p key={post.id}>{ post.id}</p>
      //    <p key={post.title}>{ post.title}ss</p>
      //   </>
      // ))
     }
               {data.map((item,i)=>(
                  <PostItem postData={item} />
               ))}
               {/* <PostItem />
               <PostItem />
               <PostItem />
               <PostItem /> */}
                <div className="d-flex justify-content-end mb-4"><a class="btn btn-primary text-uppercase" href="#!">Older Posts →</a></div> 
            </div>
         </div>
      </div>
   )
}

export default Blog;