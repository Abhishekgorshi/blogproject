import React, { useState } from 'react';
import Child from './Child';
import { useReducer } from 'react';

const Parent = () => {
  const [count,setCount] = useState(0);
  const [value,setValue] = useState(0)
  console.log("parent rendered");

  const initialState =[{
    id:1,
    score:100,
    name:"Rohan"
  },
{
  id:2,
  score:200,
  name:"akshat"
}]

function reducer (state,action) {
if(action.type == "increase"){
  return state.map((player) => {
    if(player.id == action.id){
      return {...player, score: player.score +1}
    }
    else{
      return player;
    }  })
}
if(action.type == "increase"){
  return state.map((player) => {
    if(player.id == action.id){
      return {...player, score: player.score +1}
    }
    else{
      return player;
    }  })
}
}

  const [score,dispatch] = useReducer(reducer,initialState)

  
  const handleIncrease = (player) => {
  dispatch({type:"increase", id:player.id})
  }


  const handleDecrease = (player) => {
  dispatch({type:"decrease", id:player.id})
  }
  return (
    <div>
      This is parent component

      <Child value={value} />
      <button onClick={() => setCount(count + 1)}>Increase {count}</button>
      <button onClick={() => setValue(value + 1)}>Value {value}</button>
    </div>
  );
}

export default Parent;
