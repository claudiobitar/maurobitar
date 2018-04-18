import React, { Component } from 'react'
import axios from 'axios'

const URL_ESTUDOS = 'http://localhost:3001/estudos';

class estudos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      estudos: []
    }

  }

  componentDidMount() {
    axios.get(URL_ESTUDOS)
      .then(res => {
        this.setState({ estudos: res.data })
      })
  }

  render() {
    return (
      <div>
        {this.state.estudos.map(
          item =>
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

export default estudos;













