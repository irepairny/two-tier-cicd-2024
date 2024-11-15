import React, { Component } from 'react';
import axios from 'axios';



class Summation extends Component {
    state = { 
        num:"",
        sumNum: ""
     }

    handleChange = (e) =>{
        this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit=()=>{
        axios.post(`/summation`, this.state)
        .then(res => {
          this.setState({sumNum:res.data.sum})
        })

    }

    render() { 

        return ( 
            <div className="container p-5"  >
                <form className="form-inline">
                    <div className="form-group mx-sm-3 mb-2">
                      <label htmlFor="number" className="sr-only">Number</label>
                        <input type="number"
                            value = {this.state.num} 
                            className="form-control" 
                            name =  "num"
                            onChange={this.handleChange} 
                            placeholder="1234"/>
                    </div>
                  <button type="button" className="btn btn-primary mb-2" onClick={this.handleSubmit}>submit</button>
                </form>
                
                <div className ="card" style={{width: "18rem"}}>
                  <div className ="card-body">
                    <h5 className ="card-title">Summation</h5>
                    <h6 className ="card-subtitle mb-2 text-muted">Click kore dekhe nao magic</h6>
                    <p className ="card-text">{this.state.sumNum?this.state.sumNum:""}</p>
                  </div>
                </div>


            </div>

         );
    }
}
 
export default Summation;