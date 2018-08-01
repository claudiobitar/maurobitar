import React from 'react'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { showBGImage } from './actions';

import Home from './Home'

const Header = (props) => {
  return (
    <div className="header">
      <div>
        <Router>
          <div>
            <h1>
              <Link onClick={showBGImage} className="home-link" to='/'>Mauro Bitar<br />
                <small className="home-link">arquiteto</small>
              </Link>
            </h1>
            {/*<Route exact path='/' render={() => <Home />} />*/}
          </div>
        </Router>
      </div>
    </div>
  )
}

function mapStateToProps(state){  
  console.log(state) 
  return{
    isHome: state.isHome
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({showBGImage},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);



