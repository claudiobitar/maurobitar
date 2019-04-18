import React, { Component } from 'react'

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

  render() {
    return (
      <div>     
        <div class="portfolio-intro">
          {this.state.text.map((t, index) => {
            return (
              <p class="texto-intro">
                {t}
              </p>
            )
          })}
          <div>
          </div>
        </div>
      </div>
    )
  }
}

export default Intro











