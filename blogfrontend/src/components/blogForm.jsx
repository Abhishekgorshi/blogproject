import { useState } from "react"

const BlogForm = () => {
  const [formData,setFormData] = useState({
    title:"",
    description:"",
    category:""
  });

  const changeHandler = (e) => {
  const {name,value} = e.target;
  setFormData((previous) => {
    console.log(previous);
    let obj = {
      ...previous,
      [name]:value
    }
    return obj;
  })
  }

  const submitHandler = (e) => {
   e.preventDefault();
   
   console.log("data is ",formData);
  }
  return(
     <form method="post" action="#" onSubmit={submitHandler} enctype="multipart/form-data">

    <div>
      <label>Title:</label>
      <input name="title" type="text" value={formData.title} onChange={changeHandler}></input>
    </div>

    <div>
      <label>Description:</label>
      <textarea name="description" onChange={changeHandler} value={formData.description}></textarea>
    </div>
    <div>
      <label>Category:</label>
      <select name="category" onChange={changeHandler}>
        <option value={formData.category}>SELECT CATEGORY</option>
      </select>
      <span></span>
    </div>

    <button type="submit">Add Blog</button>

  </form>
)
}

export default BlogForm;