import React, { Component } from 'react'
import { noMoreLonelyWords } from './utilities/utilities.js';

var data = require('./db.json');

class Biografy extends Component {
  constructor(props) {
    super(props)
    this.state = {
      biography: ""
    }
  }

  componentDidMount() {
    this.setState({
      biography: data.biography[0].text,
      photo: data.biography[0].photo
    })
  }

  componentDidUpdate() {
    noMoreLonelyWords("p", 2)
  }

  render() {
    return (
      <div className="nota-biografica">
        {this.state.biography && this.state.biography.map((bio) => {
          return (
            <p key={bio}className="texto-intro">
              {bio}
            </p>
          )
        })
        }
        <img src={this.state.photo && `/images/${this.state.photo}`} alt="" />

      </div>
    )
  }
}


export default Biografy