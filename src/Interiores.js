import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getInteriores} from './actions'



class Interiores extends Component {

  componentDidMount() {
    this.props.getInteriores();
  }

  render() {
    return (
      <div>       
        {/*
        {interiores.map(item =>
          <div>
            <p>{item.texto}</p>
            <ul>
              {
                item.fotos.map(foto => <li>{foto}</li>)
              }
            </ul>
          </div>
        )}
      */}     
      </div>    
    )
  }
}

function mapStateToProps(state) {  
  return {
    interiores: state.interiores
  }
}

function mapDispatchToProps(dispatch) { 
  return bindActionCreators({ getInteriores }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Interiores);













