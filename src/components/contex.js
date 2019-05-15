import React, { Component } from 'react'


const Context=React.createContext()

    class Providerr extends Component {
state={sit:"",display:false,data:[] ,mydata:[],search:"",standing:[]}
   getit=async()=>{ 
  const api="da60cf7fb4f9dc1fff1f89480b3527533edd054e188532830db63af94c6760d8"  
  const data=await fetch(`https://apifootball.com/api/?action=get_countries&APIkey=${api}` ) 
  const con=await data.json()
  this.setState({mydata:con}) ;
  } 
  
    getLeagues=async(id)=>{ const api="da60cf7fb4f9dc1fff1f89480b3527533edd054e188532830db63af94c6760d8"  
   const data=await fetch(`https://apifootball.com/api/?action=get_leagues&country_id=${id}&APIkey=${api}` ) 
   const con=await data.json() ;  this.setState({data:con})  }
   
   getStanding=async(id)=>{ const api="da60cf7fb4f9dc1fff1f89480b3527533edd054e188532830db63af94c6760d8"  
   const data=await fetch(`https://apifootball.com/api/?action=get_standings&league_id=${id}&APIkey=${api}` ) 
   const con=await data.json() ; 
   const newcon=con.sort(function(a,b){return a.overall_league_position-b.overall_league_position })  
   
   {this.setState({standing:newcon})}    
   }

  
   
displayeditor=()=>{this.getit() ;this.setState({display:!this.state.display})  }
CloseLeagues=()=>{this.setState({display:false})}
Searching=(event)=>{this.setState({search:event.target.value },()=>{
    document.querySelectorAll(".countryholder button").forEach(
    item=>{if(item.innerHTML.toLowerCase().indexOf(this.state.search.toLowerCase())!==-1){item.style.display="block"}  
    else{item.style.display="none"}} ) ; 
    })}



render() {
    return (
      <Context.Provider value={{...this.state,displayeditor:this.displayeditor,getLeagues:this.getLeagues,
      getStanding:this.getStanding,getit:this.getit,Searching:this.Searching,CloseLeagues:this.CloseLeagues}}>
 {this.props.children}

      </Context.Provider>
    )
  }
}
const Consumer=Context.Consumer


export {Providerr,Consumer}