import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
import "./leagues.scss"
import {Consumer} from "./contex.js"
export default class Navbar extends Component {





  render() {
    return (
    <Consumer> 
      {value =>  (
       <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="#Home">
              <img src="./images/customLogo.jpg" className="navlogo"/>
        </a>
        
        <div className="collapse navbar-collapse">
        <ul className="navbar-nav mx-5"> 
            <NavLink to="/">
            <li className="nav-item active mr-5" onClick={value.CloseLeagues}>
                <div className="nav-link" href=""><span>Home</span>   </div>  
            </li>
            </NavLink>
               
            <li onClick={value.displayeditor}  className="nav-item mr-5"><div className="nav-link modal_lig" href=""><span>LeagueStandings</span>    </div>  
            </li>
            
           
            <NavLink to="/fixtures">            
            <li className="nav-item mr-5" onClick={value.CloseLeagues}><div className="nav-link" href=""><span>Matches </span>  </div>  
            </li>
            </NavLink>
            <li className="nav-item mr-5"> <i className="football_icon fa fa-futbol-o" aria-hidden="true"></i> 
            </li>
        </ul>
        </div>
       </nav>)}
    </Consumer>
    )
  }
}
/*
import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
import "./leagues.scss"
import {Consumer} from "./context.js"
export default class Navbar extends Component {

    render(){
        return(
            <Consumer> 
                {value => (
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand" href="#Home">
                            <img src="./images/customLogo.jpg" className="navlogo"/>
                        </a>        
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav mx-5"> 
                                <NavLink to="/">
                                    <li className="nav-item active mr-5">
                                        <div className="nav-link">
                                            <span>Home</span>
                                        </div>  
                                    </li>
                                </NavLink>
                                <li onClick={()=>value.displayeditor()}  className="nav-item mr-5">
                                    <div className="nav-link modal_lig" href=""> 
                                        <span>Leagues</span>    
                                    </div>  
                                </li>
                            </ul>
                        </div>
                    </nav> 
                )} 
            </Consumer>
        )
    }
} */