import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect, NavLink } from 'react-router-dom'

import Home from './Home';
import NotaBiografica from './NotaBiografica';
import Portfolio from './Portfolio';

class MenuPrincipal extends Component {
  constructor(props) {
    super(props)
    this.handleOnClick = this.handleOnClick.bind(this)
  }
  
  handleOnClick(e) {    
    let element = document.querySelector('.menu-principal')
    if (e.target.classList.contains('home-link')) {      
      element.style.backgroundImage = 'url(/static/media/col3_esq.2c4ef96b.gif)'    
    } else {
      element.style.backgroundImage = 'none'    
      element.style.backgroundColor = 'green'
    }
  }

  render() {

    return (
      <div>
        <Router>
          <div className="wrapper2">
            <nav className="menu-principal">
              <ul>
                <li><NavLink onClick={this.handleOnClick} className="home-link" activeClassName="active" exact to="/">home</NavLink></li>
                <li><NavLink onClick={this.handleOnClick} activeClassName="active" exact to="/nota_biografica">nota biográfica</NavLink></li>
                <li><NavLink onClick={this.handleOnClick} activeClassName="active" exact to="/portfolio">portfolio</NavLink></li>
              </ul>
            </nav>
            <div className="page-content">
              <Redirect from="/" to="/" />
              <Route exact path='/nota_biografica' render={() => <NotaBiografica />} />
              <Route exact path='/portfolio' render={() => <Portfolio />} />
              <Route exact path='/' render={() => <Home />} />
            </div>
          </div>
        </Router>
      </div>
    )
  }
}

export default MenuPrincipal