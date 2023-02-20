import React,{Component} from 'react'

class School extends Component{
    constructor(){
        super()
        this.state={
            Name:"vashu"
        }
    }
    render(){
        console.log(this.props)
        return(
            <div style={{backgroundColor:'white',fontSize:11}}>School

                <h1>{this.props.name} your mail is:{this.props.email}</h1>
            </div>
            
        )
    }
}
export default School