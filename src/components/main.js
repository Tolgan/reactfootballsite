import React, { Component } from 'react'
import "./main.scss"
import Navbar from "./navbar.js"
import {BrowserRouter,Route,Switch} from "react-router-dom"
import Home from "./home.js"
import LeagueStandings from "./leaguestandings.js"
import Fixtures from "./fixtures.js"

export default class Main extends Component {
  render() {
    return (
      <BrowserRouter>
    <section className="mainsection">
     <Route path ="/" component={Navbar} />
      <Switch>
      <Route exact path ="/" component={Home}/>
      <Route path ="/table" component={LeagueStandings} />
      <Route path="/fixtures" component={Fixtures} />
       </Switch>


    </section>
    </BrowserRouter>
           )
  }
}
