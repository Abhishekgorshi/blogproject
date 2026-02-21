import React, { useEffect, useState } from 'react';

const State = ({ countValue }) => {
  const [counter, setCounter] = useState(countValue);

  const [showInfo, setShowInfo] = useState(false);

  const increaseValue = () => {
    let value = counter;
    setCounter(value + 1);
  }

  const decreaseValue = () => {
    let value = counter;
    setCounter(value - 1);
  }


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((json) => console.log(json));
    // setShowInfo(true);
  }, [counter]);


  useEffect(() => {
    console.log("In useeffect", counter);
    if (counter > 5) {
      setShowInfo(true);
    } else {
      setShowInfo(false);
    }
  }, [counter]);

  const [state, stateChangingMethod] = useState(0);

  const changePlus = () => {
    let show = state;
    stateChangingMethod(show + 1);

  }
  const changeMinus = () => {
    let show = state;
    stateChangingMethod(show - 1);
  }

  const [formData, setFormData] = useState({
    title: "",
    body: "",
    userId: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
const [output,setOutput] = useState([]);
const [name,setName] =useState("");

const nameHandler = (e) => {
setName(e.target.value);
}
  
  const submitHandler = (e) => {
    e.preventDefault();
     fetch("https://shrimo.com/fake-api/blog",{
      method:"POST",
      header:{"Content-type":"application/json, charset=UTF-8"},
      body:JSON.stringify({
        name
      })
    })

    .then(response => response.json())
    .then(jsondata => setOutput(jsondata))
 
  } 
  const [cart,setCart] = useState(0);
  const addCart = () => {
    const numbers = cart +1;
   setCart(numbers)
  }


  const multipleAdd = () => {
    const numbers = cart +2;
   setCart(numbers)
  }
  const tripleAdd = () => {
    const numbers = cart +3;
    setCart(numbers)
  }
  const fourAdd = () => {
      const numbers = cart +4;
     setCart(numbers)
    }
const pentaAdd = () => {
    const numbers = cart +5;
   setCart(numbers)
  }
  const resetCart = () => {
    const numbers = 0;
    setCart(numbers)
  }

  const  [colour,setColour] = useState({
    first:"blue",
    second:"blue",
    third:"blue"
  })
  const changeColour = () => {
setColour({
  first:"red",
  second:"yellow",
  third:"black"
})}
 const changeColourAgain = () => {
setColour({
  first:"pink",
  second:"brown",
  third:"gray"
})
}
const resetColour = () => {
setColour({
  first:"blue",
  second:"blue",
  third:"blue"
})
}


  return (
    <div>
      <button onClick={decreaseValue}>Decrement(-)</button>
      <h1>{counter}</h1>
      <button onClick={increaseValue}>Increment(+)</button>
      <button onClick={changeMinus}>Decrement(-)</button>
      <h1>{state}</h1>
      <button onClick={changePlus}>Increment(+)</button>
      <p>{counter}</p>
      {showInfo &&
        <h1>Current Value is counter: {counter}</h1>

      }

      <form onSubmit={handleSubmit}>
        <input type="text" name="title" value={formData.title} onChange={handleChange} /><br />
        <input type="text" name='body' value={formData.body} onChange={handleChange} /><br />
        <select name='userId' onChange={handleChange} value={formData.userId} >
          <option value={1}>User 1</option>
          <option value={2}>User 2</option>
          <option value={3}>User 3</option>
          <option value={4}>User 4</option>
        </select>
        <br />

        <button>Save Data</button>
      </form>
<form onSubmit={submitHandler}>
  <input name='name' onChange={nameHandler} value={name}></input>
  <button type='submit'>submit</button>
</form>
<p>{output.message}</p>
<button onClick={addCart}>Add to cart</button>
   <button onClick={multipleAdd}>add double in cart</button>
   <button onClick={tripleAdd}>add triple in cart</button>
   <button onClick={fourAdd}>add four in cart</button>
   <button onClick={pentaAdd}>add five in cart</button>
   <button onClick={resetCart}>reset cart</button>
<p><span>Cart :</span>{cart}</p>
   <div><span>Cart :</span>{cart}</div>
   <p><span>Cart :</span>{cart}</p>
   <p><span>Cart :</span>{cart}</p>
   <p><span>Cart :</span>{cart}</p> 
   <div id='first' style={{color:"white",height:"200px",display:"inline-block", width:"200px", backgroundColor:colour.first, marginRight:"20px"}}> first div</div>
   <div id='second' style={{marginRight:"20px",color:"white",display:"inline-block", height:"200px", width:"200px", backgroundColor:colour.second}}> second div</div>
   <div id='third' style={{height:"200px",display:"inline-block",marginRight:"20px", width:"200px", backgroundColor:colour.third, color:"white"}}> third div</div><div style={{display:"inline-block"}}>
   <button onClick={changeColour}>Change colour</button>
    <button onClick={changeColourAgain}>Change colour again</button>
    <button onClick={resetColour}>reset colour</button>
    </div>
   </div>
  );
}

export default State;