import React, {Component} from 'react'
import Header from './Header'
import MenuPrincipal from './MenuPrincipal'

class Coluna1 extends Component {
  constructor(props){
    super(props)
    //this.props.modalToggled = this.props.modalToggled.bind(this)
  }

  

  render() {
    return (
      <div>
        <Header />
        <MenuPrincipal />
      </div>
    )
  }
}

export default Coluna1