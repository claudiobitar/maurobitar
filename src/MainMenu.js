import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import Home from './Home';
import Biografy from './Biografy';
import Portfolio from './Portfolio';
import PortfolioMenu from './PortfolioMenu'
import Contact from './Contact';



class MainMenu extends Component {
  constructor(props) {
    super(props)
    this.openNav = this.openNav.bind(this)
  }

  openNav() {

    let x = document.getElementById("menu-principal");

    if (x.className === "menu-principal") {
      x.className += " menujs";
      document.getElementById("threeline-icon").innerHTML = "&Cross;";


    } else {
      x.className = "menu-principal";
      document.getElementById("threeline-icon").innerHTML = "&#9776;";
    }
  }

  render() {

    return (
      <div>
        <Router>
          <div className="wrapper2">
            <nav id="menu-principal" className="menu-principal">
              <ul>
                <li><NavLink onClick={this.openNav} activeClassName="active-home" className="home-link" activeClassName="active" exact to="/"><span className="bullet">•</span>início</NavLink></li>
                <li><NavLink onClick={this.openNav} activeClassName="active" exact to="/nota_biografica"><span className="bullet">•</span>nota biográfica</NavLink></li>
                <li><NavLink onClick={this.openNav} activeClassName="active" exact to="/portfolio/intro"><span className="bullet">•</span>portfolio</NavLink></li>
                <li><NavLink onClick={this.openNav} activeClassName="active" exact to="/contato"><span className="bullet">•</span>contato</NavLink></li>
                <li onClick={this.openNav} id="threeline-icon" className="threeline-icon">&#9776;</li>
              </ul>
            </nav>
            <div className="page-content">         
              <Route exact path='/nota_biografica' render={() => <Biografy />} />
              <Route exact path='/portfolio/intro' render={() => <Portfolio />}/>           
              <Route exact path='/contato' render={() => <Contact />} />
              <Route exact path='/' render={() => <Home />} />
            </div>
          </div>
        </Router>
      </div>
    )
  }
}

export default MainMenu