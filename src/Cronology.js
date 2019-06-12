import React, { Component } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import {noMoreLonelyWords} from './utilities/utilities.js';

var data = require('./db.json');

class Cronology extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cronology: [],
      year: "",
      description: ""
    }  
  }

  componentDidMount() {
    this.setState({
      cronology: data.cronology
    })
  
  }

  componentDidUpdate(){   
    noMoreLonelyWords("p", 2)
  }
  

  render() {
    return (
      <div className="cronologia">
        <h3>Trabalhos realizados a partir de 1993</h3>       
         <Scrollbars className="scroll">
            <table>
              {
                this.state.cronology && this.state.cronology.map(
                  (i, index) => {
                    return (
                      <tr key={index}>
                        <th className="column1"><p>• {i.year}</p></th>
                        <th className="column2"><p>{i.description}</p></th>
                      </tr>
                    )
                  }
                )
              }
            </table>
        </Scrollbars>
      </div>
    )
  }
}

export default Cronology;













