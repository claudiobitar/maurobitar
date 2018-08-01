import React, {Component} from 'react'
import PortfolioMenu from './PortfolioMenu'


class Portfolio extends Component {
  constructor(props) {
    super(props)
    
  }
  render() {
    return (
      <div className="portfolio">
        <PortfolioMenu />
      </div>
    )
  }
}

export default Portfolio