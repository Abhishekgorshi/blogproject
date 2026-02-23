import { createContext, useEffect, useState } from "react";

export const AppContext = createContext(null);

const ContextProvider = ({children}) => {
 const [blogs,setBlogs] = useState([]);
 const [categories,setCategories] = useState([]);
 const [blogCount,setBlogcount] = useState(0);
 const [categoryCount,setCategorycount] = useState(0);

 useEffect(() => {
       fetch('http://localhost:8000/api/client/dashboard')
      .then(res => res.json())
      .then(response => { const output = response.data
                 if(response.success === true){
                 setBlogcount(output.blogCount)
                 setCategorycount(output.categoryCount)
                 setBlogs(output.blogs)
                 setCategories(output.categories)
                        }
                        console.log("data output",output.blogs)
               })
        },[])

 return(
  <AppContext.Provider value={{blogs,categories,categoryCount,blogCount}}>
    {children}
  </AppContext.Provider>
 )
}
export default ContextProvider;