import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect, NavLink } from 'react-router-dom'

import Home from './Home';
import NotaBiografica from './NotaBiografica';
import Portfolio from './Portfolio';
import Contato from './Contato';


class MenuPrincipal extends Component {
  constructor(props) {
    super(props)
    this.handleOnClick = this.handleOnClick.bind(this)
    //this.modalToggled = this.modalToggled.bind(this)
  }
  
  handleOnClick(e) {  
    if (e.target.classList.contains('home-link')) {      
      document.querySelector('.menu-principal')
      .style.backgroundImage = 'url(/images/col3_esq.gif)'     
    } else {
      document.querySelector('.menu-principal')
      .style.backgroundImage = 'none'
    }
  }

  render() {

    return (
      <div>
        <Router>
          <div className="wrapper2">
            <nav className="menu-principal">
              <ul>
                <li><NavLink onClick={this.handleOnClick} activeClassName="active-home" className="home-link"  exact to="/">• início</NavLink></li>
                <li><NavLink onClick={this.handleOnClick} activeClassName="active" exact to="/nota_biografica">• nota biográfica</NavLink></li>
                <li><NavLink onClick={this.handleOnClick} activeClassName="active" exact to="/portfolio">• portfolio</NavLink></li>
                <li><NavLink onClick={this.handleOnClick} activeClassName="active" exact to="/contato">• contato</NavLink></li>
              </ul>
            </nav>
            <div className="page-content">                     
              <Route exact path='/nota_biografica' render={() => <NotaBiografica/>} />
              <Route exact path='/portfolio' render={() => <Portfolio />} />
              <Route exact path='/contato' render={() => <Contato />} />    
              <Route exact path='/' render={() => <Home />} />
            </div>
          </div>
        </Router>
      </div>
    )
  }
}

export default MenuPrincipal