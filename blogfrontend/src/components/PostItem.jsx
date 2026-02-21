import React from 'react';
import { Link } from 'react-router-dom';

const PostItem = ({postData}) => {
  const {title, body} = postData;
  console.log(postData)
  return (
    <>
      <div class="post-preview">
        <Link to="/postItem">
          <h2 className="post-title">{title}</h2>
          <h3 class="post-subtitle">{body}</h3>
        </Link>
        <p class="post-meta">
          Posted by 
          <a href="#!"> Start Bootstrap </a>
          on September 24, 2023
        </p>
      </div>
      <hr class="my-4" />

    </>
  );
}

export default PostItem;
