import React, { Component } from 'react'
import axios from 'axios'
import $ from 'jquery'
import Pagination from 'react-js-pagination'
//require("bootstrap/less/bootstrap.less")

const URL_CASAS = 'http://localhost:3001/casas';

class Casas extends Component {
  constructor(props) {
    super(props)
   
   
  }

 
 /*
  componentDidMount() {
    axios.get(URL_CASAS)
      .then(res => {
        this.setState({ casas: res.data })
      })
  }
  */
  render(){
    return <p>Componente Casas</p>
  }
}

export default Casas;