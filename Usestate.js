import React,{useState} from 'react'

function Usestate() {
    const [object, setobject] = useState({Name:'ashu',work:'home',age:27,degree:"mcs"})
    const changeobject=()=>{
        setobject({...object,Name:'dash',age:34,degree:"cs"})
    }
  return (
    <div>Usestate
        <h1> My name is {object.Name} My age is:{object.age} my degree is: {object.degree}</h1>
        <button onClick={changeobject}>changeobject</button>
    </div>

  )
}

export default Usestate