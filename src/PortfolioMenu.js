import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import Intro from './Intro'
import Houses from './Houses'
import PortfolioPage from './PortfolioPage'
import Cronology from './Cronology'

var data = require('./db.json');

class PortfolioMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      portfolioClass: "",
      interiors: [],
      furnitures: [],
      studies: [],
      houses: []
    }
  }

  componentDidMount() {
    this.setState({
      interiors: data.interiors[0],
      furnitures: data.furnitures[0],
      studies: data.studies[0],
      houses: data.houses
    })
  }

  isActive = (match, location) => {
    const { portfolioClass } = this.state;
    const newClass = match ? "portfolio-menu-introjs" : "";
    if (newClass !== portfolioClass)
      this.setState({ portfolioClass: newClass });
    return match;
  };



  render() {
    const { portfolioClass } = this.state;
    return (
      <div>
        <Router>
          <div className={`wrapper2 ${portfolioClass}`}>           
            <div className="wrapper-portfolio">
              <Route exact path='/portfolio/casas' component={()=><Houses data={this.state.houses} />}/>
              <Route exact path='/interiores' render={() => <PortfolioPage data={this.state.interiors} />} />
              <Route exact path='/moveis' render={() => <PortfolioPage data={this.state.furnitures} />} />
              <Route exact path='/estudos' render={() => <PortfolioPage data={this.state.studies} />} />
              <Route exact path='/cronologia' render={() => <Cronology />} />
              <Route exact path='/portfolio/intro'  component={() => <Intro/>}/>
  
            </div>
            <nav>
              <ul className={`portfolio-menu ${portfolioClass}`}>
                <li><NavLink activeClassName="active" isActive={this.isActive} to="/portfolio/intro"><span className="bullet">•</span> introdução</NavLink></li>
                <li><NavLink activeClassName="active" exact to="/portfolio/casas"><span className="bullet">•</span> casas</NavLink></li>
                <li><NavLink activeClassName="active" exact to="/interiores"><span className="bullet">• </span>interiores</NavLink></li>
                <li><NavLink activeClassName="active" exact to="/moveis"><span className="bullet">• </span>móveis</NavLink></li>
                <li><NavLink activeClassName="active" exact to="/estudos"><span className="bullet">• </span>estudos</NavLink></li>
                <li><NavLink activeClassName="active" exact to="/cronologia"><span className="bullet">• </span>cronologia</NavLink></li>
              </ul>
            </nav>
          </div>
        </Router>
      </div>
    )
  }
}


export default PortfolioMenu