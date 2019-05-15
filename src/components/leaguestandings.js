import React, { Component } from 'react'
import {Consumer} from "./contex.js"
export default class Leaguestandings extends Component {
 

   

  
  render() {
   

    return ( <Consumer>
    {value=>
    <div className="container-fluid p-5"> 
     <div className="row">
      <div className="col mx-auto">
       <div className="team px-2">
       <h1>{value.standing.length>0 && value.standing[0].league_name}</h1>
        <p>PLAYED</p>
        <p>W</p>
        <p>D</p>
        <p>L</p>
        <p>GF</p>
        <p>GA</p>
        <p>PTS</p>
       </div>    
      </div>
     </div>   
  
    {value.standing.map((item,index)=>  
    <div className="row" key={index} class="teams" id={item.overall_league_position}>    
      <div className="col mx-auto">
        <div className="team ">
          <h3>{item.overall_league_position}.{item.team_name} </h3>
          <p>{item.overall_league_payed} </p>
          <p>{item.overall_league_W} </p>
          <p>{item.overall_league_D} </p>
          <p>{item.overall_league_L} </p>
          <p>{item.overall_league_GF} </p>
          <p>{item.overall_league_GA} </p>
          <p>{item.overall_league_PTS} </p>

        </div>
      </div>
    </div>
    )   }
         
</div>
    } 
    
     </Consumer>)
  }}    
  

