import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home';

const Header = (props) => {
  return (
    <div className="header">
      <div>
        <Router>
          <div>         
            <h1>               
             <a className="home-link" href='/'>Mauro Bitar<br />             
                <small className="home-link">arquiteto</small>
             </a>          
            </h1>
            <Route exact path='/' component={Home} />
          </div>      
        </Router>
      </div>
    </div>
  )
}

export default Header


