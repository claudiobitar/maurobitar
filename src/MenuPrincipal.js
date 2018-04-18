import React from 'react'
import { BrowserRouter as Router, Route, Redirect, NavLink } from 'react-router-dom'

import Home from './Home';
import NotaBiografica from './NotaBiografica';
import Portfolio from './Portfolio';

const MenuPrincipal = (props) => {
  return (
    <div>
      <Router>
        <div className="wrapper2">
          <nav className="menu-principal">
            <ul>
              <li><NavLink activeClassName="active" exact to="/">home</NavLink></li>
              <li><NavLink activeClassName="active" exact to="/nota_biografica">nota biográfica</NavLink></li>
              <li><NavLink activeClassName="active" exact to="/portfolio">portfolio</NavLink></li>
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

export default MenuPrincipal