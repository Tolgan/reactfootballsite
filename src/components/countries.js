import React, { Component } from 'react'
import "./leagues.scss"
import {Link} from "react-router-dom"
import {Consumer} from "./contex.js"
export default class Countries extends Component {

  state={showleagues:false}
  showLig=(id)=>{this.setState({showleagues:!this.state.showleagues}); const ligbutons=document.querySelectorAll(".ligbutons")
    ligbutons.forEach(item=> {
    if(item!==document.getElementById(id)){item.classList.remove("drop")} 
    else {document.getElementById(id).classList.toggle("drop")}

}) ;  }
  

  render() { 
   
    return ( 
      <Consumer>
       {value=> 
      <div className="countryholder">
        <button onClick={()=>{value.getLeagues(this.props.id);this.showLig(this.props.id)}} className="country"> 
          {this.props.country} {this.state.showleagues ? "-" : "+" }
        </button>
        <div className="ligbutons" id={this.props.id}>
           { this.state.showleagues&&(value.data.length>1)&&value.data.slice(0,2).map((item)=>
        <Link to="/table" key={item.league_name}>
          <button  id={item.league_id} className="ligbuton " onClick={()=>value.getStanding(item.league_id)}>
            {item.league_name}
          </button>
        </Link>)}
         {this.state.showleagues&&(value.data.length<=1)&&value.data.map(item=>
        <Link to="/table" >
          <button  className="ligbuton " onClick={()=>value.getStanding(item.league_id)} >
            {item.league_name}
          </button>
        </Link>)} 
        </div>
      </div>}
      </Consumer>
    )
  }
}
