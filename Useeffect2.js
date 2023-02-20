import React,{useState,useEffect} from 'react'
// import './style.css'

function Useeffect2() {
  const [count1, setcount1] = useState(0)
  const [count2, setcount2] = useState(0)
  function setc1(){
    setcount1(count1+1)
  }
  function setc2(){
    setcount2(count2-1)
  }
 
  useEffect(() => {
   
  // document.title=`clicked times${count2}
  alert('i am clicked') 
  },[count2])
  
  
  return (
    <div>Useffect2
        <h1>this is useefect argument hook</h1>
        <h2>increment :{count1}</h2>
        <h2>decrement :{count2}</h2>
        <button onClick={setc1}>increment</button>
        <button onClick={setc2}>decre</button>
    </div>
  )
}

export default Useeffect2