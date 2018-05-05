import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Home from './Home'

const Header = (props) => {
  return (
    <div className="header">
      <div>
        <Router>
          <div>
            <h1>
              <Link className="home-link" exact to='/'>Mauro Bitar<br />
                <small>arquiteto</small>
              </Link>
            </h1>
            <Route exact path='/' render={() => <Home />} />
          </div>
        </Router>
      </div>
    </div>
  )
}

export default Header