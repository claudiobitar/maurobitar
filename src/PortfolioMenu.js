import React, {Component} from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import Casas from './Casas'
import Interiores from './Interiores'
import Moveis from './Moveis'
import Estudos from './Estudos'
import Cronologia from './Cronologia'

class PortfolioMenu extends Component { 
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        <Router>
          <div class="wrapper2">
            <div class="wrapper-portfolio">
              <Route exact path='/portfolio/casas' render={() => <Casas />} />
              <Route exact path='/portfolio/interiores' render={() => <Interiores />} />
              <Route exact path='/portfolio/moveis' render={() => <Moveis />} />
              <Route exact path='/portfolio/estudos' render={() => <Estudos />} />
              <Route exact path='/portfolio/cronologia' render={() => <Cronologia/>} />
            </div>
            <nav>
              <ul className="portfolio-menu">
                <li><NavLink onClick={this.props.handleMenuClick} activeClassName="active" exact to="/portfolio/casas">casas</NavLink></li>
                <li><NavLink onClick={this.props.handleMenuClick} activeClassName="active" exact to="/portfolio/interiores">interiores</NavLink></li>
                <li><NavLink onClick={this.props.handleMenuClick} activeClassName="active" exact to="/portfolio/moveis">móveis</NavLink></li>
                <li><NavLink onClick={this.props.handleMenuClick} activeClassName="active" exact to="/portfolio/estudos">estudos</NavLink></li>
                <li><NavLink onClick={this.props.handleMenuClick} activeClassName="active" exact to="/portfolio/cronologia">cronologia</NavLink></li>
              </ul>
            </nav>
          </div>
        </Router>
      </div>
    )
  }
}

export default PortfolioMenu