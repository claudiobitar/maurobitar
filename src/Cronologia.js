import React, { Component } from 'react'
import axios from 'axios'
import { Scrollbars } from 'react-custom-scrollbars'

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

      <div className="cronologia">

        <h3>Trabalhos realizados a partir de 1993</h3>        

        {/*<Scrollbars style={{ width: 430, height: 300 }}>*/}
        <Scrollbars style={{ width: 410, height: 300 }}>
          <div className="cronologia-conteudo">

          {this.state.cronologia.map(item =>
            <ul>
              {
                item.listaProjetos.map(projeto => <li>• {projeto}</li>)
              }
            </ul>
          )}
          </div>

        </Scrollbars>
      </div>
    )
  }
}

export default cronologia;













