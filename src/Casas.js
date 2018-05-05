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
      activePage: 15     
    };
    
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
  }

  render() {
    return (
      <div>
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={3}
          totalItemsCount={10}
          pageRangeDisplayed={3}
          onChange={this.handlePageChange}
      />
      </div>
    );
  }



}

export default Casas;