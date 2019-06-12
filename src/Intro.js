import React, { Component } from 'react'
import { noMoreLonelyWords } from './utilities/utilities.js';

var data = require('./db.json');

class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: []
    }
  }

  componentDidMount() {
    this.setState({
      text: data.portfolioIntro[0].text
    })
  }

  componentDidUpdate() {
    noMoreLonelyWords("p", 2)
  }

  render() {
    return (
      <div className="portfolio-intro">
        {this.state.text.map(t => {
          return (
            <p key={t} className="texto-intro">
              {t}
            </p>
          )
        })}
        <div>
        </div>
      </div>

    )
  }
}

export default Intro











