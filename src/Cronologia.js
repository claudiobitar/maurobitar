import React, { Component } from 'react'
import axios from 'axios'

const URL_CRONOLOGIA = 'http://localhost:3001/cronologia';

class cronologia extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cronologia: []
    }

  }

  componentDidMount() {
    axios.get(URL_CRONOLOGIA)
      .then(res => {
        this.setState({ cronologia: res.data })
      })
  }

  render() {
    return (
      <div>
        <h2>Trabalhos realizados a partir de 1993</h2>
        {this.state.cronologia.map(item =>
          <ul>
            {
              item.listaProjetos.map(projeto => <li>{projeto}</li>)
            }
          </ul>
        )}

      </div>
    )
  }
}

export default cronologia;













