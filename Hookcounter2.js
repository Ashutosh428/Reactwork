import React, { useState } from 'react'

function Hookcounter2() {
    const initialcount=0;
    const[count,setcount]=useState(initialcount)
    const Increment5=()=>{
for (let i = 0; i < 5; i++) {
    setcount(prevcount=> prevcount+1);
    
    
}
    }
  return (
    <div>
        count:{count}
        <button onClick={()=>setcount(initialcount)}>reset</button>
        <button onClick={()=>setcount(count+1)}>increment</button>
        <button onClick={()=>setcount(count-1)}>decrement</button>
        <button onClick={Increment5}>Increment5</button>
    </div>
  )
}

export default Hookcounter2