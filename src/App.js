import React, { Component } from 'react';

import Header from './Header'
import MenuPrincipal from './MenuPrincipal'
import Home from './Home'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <MenuPrincipal />
        <Footer />
      </div>
    )
  }
}

export default App;
