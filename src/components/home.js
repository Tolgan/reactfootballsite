import React, { Component } from 'react'
import "./leagues.scss"
import Countries from "./countries.js"
import {Consumer} from "./contex.js"

export default class Home extends Component {

  
 
    

  render() {
    return (
    <React.Fragment>
      <img src="./images/ronaldinho.jpg" className="imgresp" alt="ronaldinho" />
      <video className="myvid" autoPlay loop muted >
        <source type="video/mp4" src="./images/abdus.mp4" ></source>
        Your browser doesnt support video
        
      </video>
      <Consumer> 
        {value=> 
        { if(value.display===true) {return ( 
        <React.Fragment>
          <input className="search" type="text" value={value.search} onChange={value.Searching} placeholder="Search.." style={{width:"4rem"}} />
          <div className="leagues">
            {value.mydata.map(item=>   <Countries key={item.country_id} id={item.country_id} country={item.country_name}  />) }
          </div> 
        </React.Fragment>)}  } }
      </Consumer>
    </React.Fragment>
    )
  }
}
