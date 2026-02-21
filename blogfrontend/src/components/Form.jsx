import React, { useState } from 'react';

const Form = () => {

  // const [name,setName] = useState("");
  // const [email,setEmail] = useState("");
  // const [age,setAge] = useState("");

  const [formData, setFormData] = useState({
    name : "",
    email : "",
    age : ""
  });

  const handleChange = (e) => {
     const {name, value} = e.target;

     setFormData((prev => {
      console.log("previous value",prev);
      let obj = {
        // ...prev,
        [name] : value
      }
      console.log('form data',obj);
      return obj;
     }));


    //  console.log("name & value is",name,value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("value is",formData);
    
  }
  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        {/* <div>
           <label htmlFor='name'>Name</label>
           <input type='text' id="name" name='name' onChange={(e) => setName(e.target.value)} value={name} />
        </div>
        <div>
           <label htmlFor='email'>Email</label>
           <input type='text' id="email" name='email' onChange={(e) => setEmail(e.target.value)} value={email} />
        </div>
        <div>
           <label htmlFor='age'>Age</label>
           <input type='text' id="age" name='age' onChange={(e) => setAge(e.target.value)} value={age} />
        </div> */}

        <div>
           <label htmlFor='name'>Name</label>
           <input type='text' id="name" name='name' onChange={handleChange} value={formData.name} />
        </div>
        <div>
           <label htmlFor='email'>Email</label>
           <input type='text' id="email" name='email' onChange={handleChange} value={formData.email} />
        </div>
        <div>
           <label htmlFor='age'>Age</label>
           <input type='text' id="age" name='age' onChange={handleChange} value={formData.age} />
        </div>
        <button>Save</button>
      </form>
    </div>
  );
}

export default Form;
