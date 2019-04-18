import React, {Component} from 'react'
import PortfolioMenu from './PortfolioMenu'
import Intro from './Intro'

class Portfolio extends Component {  

  render() {
    return (
      <div className="portfolio">      
        <PortfolioMenu />    
      </div>
    )
  }
}

export default Portfolio