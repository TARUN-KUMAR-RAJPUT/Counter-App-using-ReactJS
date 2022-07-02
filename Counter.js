import React, { Component } from "react";
import "./Counter.css"

class Counter extends Component {
    
   constructor() {
    super()
    this.state = {
        count : 0
    }
   }

   increaseCounter(){
    
    this.setState({
        count : this.state.count + 1
    })

   }

   render(){

    return (

        <div>

            <div className="box">
                <h1 className="font"> {this.state.count} </h1>
            </div>
            
            <button className="btn" onClick={() => this.increaseCounter()}> Hit </button>
            
        </div>
    )
   }

}

export default Counter