import React, { Component } from 'react'

var data = require('./db.json');

class UpdateInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      updateDate: ""
    }
  }

  componentDidMount() {
    this.setState({
      updateDate: data.updateDate[0].text
    })
  }

  render() {
    return (
      <div className="update-info">
        desenvolvido por Claudio Bitar<br />
        última atualização: {this.state.updateDate}
    </div>
    )
  }
}

export default UpdateInfo

