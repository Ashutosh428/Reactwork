import React,{useState,useEffect} from 'react'



function Useeffect1() {
    const [count, setcount] = useState(0)
    useEffect(() => {
      document.title=`you clicked ${count} times`
    
     
    })
    
  return (
    <div>Useeffect
        <h1>welcome to useeffect</h1>
        <button onClick={()=>setcount(count+1)}>click{count}</button>
    </div>
  )
}

export default Useeffect1