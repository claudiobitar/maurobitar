import React, { Component } from 'react'
import axios from 'axios'

const URL_INTERIORES = 'http://localhost:3001/interiores';

class Interiores extends Component {
  constructor(props) {
    super(props)
    this.state = {
      interiores: []
    }

  }

  componentDidMount() {
    axios.get(URL_INTERIORES)
      .then(res => {
        this.setState({ interiores: res.data })
      })
  }

  render() {
    return (
      <div>
        {this.state.interiores.map(item =>
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

export default Interiores;













