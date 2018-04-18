import React, { Component } from 'react'
import axios from 'axios'
import $ from 'jquery'
import Pagination from 'react-js-pagination'
//require("bootstrap/less/bootstrap.less")

const URL_CASAS = 'http://localhost:3001/casas';

class Casas extends Component {
  constructor(props) {
    super(props)
    this.state = {
      casas: []  ,   
      activePage: 1,
      itemPerPage: 3,     
      casasDuplicadas: [] 
   }
   this.handlePageChange = this.handlePageChange.bind(this) 
   
  }

 
 /*
  componentDidMount() {
    axios.get(URL_CASAS)
      .then(res => {
        this.setState({ casas: res.data })
      })
  }
  */

 componentDidMount() {
  let d = '';
  $.get(URL_CASAS, function (data) {
      d = data;
      this.setState({
          projectList: d,
          originalProjectList: d
      });
  }.bind(this));
}

handlePageChange(pageNumber) {
  this.setState({ activePage: pageNumber });
}


  render() {

    const { projectList, activePage, itemPerPage } = this.state;

    const indexOfLastTodo = activePage * itemPerPage;
    const indexOfFirstTodo = indexOfLastTodo - itemPerPage;
    const renderedProjects = projectList.slice(indexOfFirstTodo, indexOfLastTodo);

   
    return (
      <div>
        {this.state.casas.map(item =>
          <div>
            <h2>{item.nome}</h2>
            <p>{item.descricao}</p>
            <ul>
              {
                item.fotos.map(foto => <li>{foto}</li>)
              }
            </ul>
            <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={this.state.itemPerPage}
          totalItemsCount={this.state.originalProjectList.length}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange.bind(this)}
      />

          </div>
          
        )}
         
      </div>
    )
  }
}

export default Casas;