import React, { Component } from 'react'
import _ from 'lodash'
import "./fixtures.css"
import Countries from "./countries.js"
import {Consumer} from "./contex.js"


export default class Fixtures extends Component {

    
    state={seriea:[],laliga:[],bundesliga:[],barclas:[],süper:[],match:[]}
    async getMatches(){


function dates(padding){
    const today=new Date() 
    today.setDate(today.getDate()-padding)    
    const yyyy=today.getFullYear()
    let mm=(today.getMonth()+1)   
    let dd=today.getDate()
    if(mm<10){mm="0"+mm} if(dd<10){dd="0"+dd}
    const date=yyyy+"-"+mm+"-"+dd  ; console.log(date)
    return(date )
    }
    let ligfixids=[]
    let i ; for(i=0;i<400;i++){ligfixids.push(i)   }  
    ligfixids=ligfixids.toString()
    dates(4)    
  const api="da60cf7fb4f9dc1fff1f89480b3527533edd054e188532830db63af94c6760d8"   
  const data=await fetch(`https://apifootball.com/api/?action=get_events&from=${dates(4)}&to=${dates(0)}&league_id=${ligfixids}&APIkey=${api}`)
  const con=await data.json()  ;
  const grp= _.groupBy(con,"league_name")
  this.setState({seriea:grp['Serie A'],laliga:grp['Liga BBVA'],bundesliga:grp['BundesLiga'],süper:grp['Super Lig'],
  barclas:grp['Premier League']}) 
 }

componentDidMount(){this.getMatches()}

    render() {


    return (
<section className="p-5 myfixtures">
  <div className="ligfix">
   {this.state.seriea.length>0 && 
    <h1 className="text-center">{this.state.seriea[0].league_name}</h1> }{
    this.state.seriea.map((item,index)=>
    <div key={index} className="matches text-center">
      <span className="dates">{item.match_date}</span>  
      <span>{item.match_time}  </span> 
      <strong>{item.match_hometeam_name}</strong>{":"+item.match_hometeam_score+"-"+item.match_awayteam_score+
      ":"}{<strong>{item.match_awayteam_name}</strong>}   
    </div>   
  )   }
  </div>


  <div className="ligfix">
   {this.state.laliga.length>0 &&
   <h1 className="text-center">{this.state.laliga[0].league_name}</h1>}{this.state.laliga.map((item,index)=>
   <div key={index} className="text-center matches">
      <span className="dates">{item.match_date}</span> 
      <span>{item.match_time}  </span> 
      <strong>{item.match_hometeam_name}</strong>{":"+item.match_hometeam_score+"-"+item.match_awayteam_score+
      ":"}{<strong>{item.match_awayteam_name}</strong>}       
   </div>
  )   }
  </div>


  <div className="ligfix">
   {this.state.barclas.length>0 &&    
   <h1 className="text-center">{this.state.barclas[0].league_name}</h1>}{this.state.barclas.map((item,index)=>
   <div key={index} className="text-center matches">
      <span className="dates">{item.match_date}</span> 
      <span>{item.match_time}  </span> 
      <strong>{item.match_hometeam_name}</strong>{":"+item.match_hometeam_score+"-"+item.match_awayteam_score+
      ":"}{<strong>{item.match_awayteam_name}</strong>}   
    
   </div>
  )   }
  </div>

  <div className="ligfix">
   {this.state.süper.length>0 &&
    

   <h1 className="text-center">{this.state.süper[0].league_name}</h1>}{this.state.süper.map((item,index)=>
   <div key={index} className="text-center matches">
      <span className="dates">{item.match_date}</span>
      <span>{item.match_time}  </span> 
      <strong>{item.match_hometeam_name}</strong>{":"+item.match_hometeam_score+"-"+item.match_awayteam_score+
      ":"}{<strong>{item.match_awayteam_name}</strong>}   
    
   </div>
   )   }
  </div>
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
</section>
    )
  }
}
