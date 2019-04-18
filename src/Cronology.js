import React, { Component } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'

var data = require('./db.json');

class Cronology extends Component {
  constructor(props) {
    super(props)
    this.state = {    
      projects:[]
    }
  }

  componentDidMount() {
    this.setState({
      projects: data.cronology[0].projects
    })
  }

  render() {
    return (
      <div className="cronologia">        
        <h3>Trabalhos realizados a partir de 1993</h3>
        <Scrollbars style={{ width: 410, height: 300 }}>
          <div className="cronologia-conteudo">       
              <ul>
                {
                  this.state.projects.map(project => <li>• {project}</li>)
                }
               </ul>         
          </div>
        </Scrollbars>
      </div>
    )
  }
}

export default Cronology;













