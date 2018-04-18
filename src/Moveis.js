import React, { Component } from 'react'
import axios from 'axios'

const URL_MOVEIS = 'http://localhost:3001/moveis';

class Moveis extends Component {
  constructor(props) {
    super(props)
    this.state = {
      moveis: []
    }

  }

  componentDidMount() {
    axios.get(URL_MOVEIS)
      .then(res => {
        this.setState({ moveis: res.data })
      })
  }

  render() {
    return (
      <div>
        {this.state.moveis.map(item =>
          <div>
            <p>{item.texto}</p>
            <ul>
              {
                item.fotos.map(foto => <li>{foto}</li>)
              }
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Moveis;













