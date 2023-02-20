import React,{useState} from 'react'

function Textform(props) {
  const [text, setText] = useState("enter the text")
  const Convert=()=>{
    
    let newText=text.toUpperCase()
    setText(newText)
      }
  function Change(event) {
    setText(event.target.value)
  }
 
  return (
    <>
    <div className='container'>
        <h2>{props.heading}</h2> 
  
<div className="mb-3">
  
  <textarea className="form-control" id="myBox" rows="8" onChange={Change} value={text}></textarea>
  
</div>

<button onClick={Convert} className="btn btn-primary">Convert to uppercase</button>

    </div>
    <div className='container my-3'>
      <h1>Your text summary</h1>  
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} Minutes read</p>
    </div>
    </>
  )
}

export default Textform