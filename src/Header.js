import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Home from './Home'

const Header = (props) => {
  return (
    <div className="header">
      <div>
        <Router>
          <div>
            <Link className="home-link" exact to="/"><h1>Mauro Bitar<br />
              <small>arquiteto</small></h1>
            </Link>
            <Route exact path='/' render={() => <Home />} />
          </div>
        </Router>
      </div>
    </div>
  )
}

export default Header