import React, { Component } from 'react'
import axios from 'axios'
import Modal from 'react-responsive-modal';
import { BrowserRouter as Router, Link } from 'react-router-dom'

const URL_INTERIORES = 'http://localhost:3001/interiores';

class Interiores extends Component {
  constructor(props) {
    super(props)
    this.state = {     
      interiores: [],
      open: false
    }      
  }

  onOpenModal = () => {
    this.setState({ open: true });
    document.querySelector('#canvas').style.display='none'
  };

  onCloseModal= () => {
    this.setState({ open: false });   
  };  

  
  onExited=()=>{
    document.querySelector('#canvas').style.display='block'  
  } 
  
  componentDidMount() {
    axios.get(URL_INTERIORES)
      .then(res => {
        this.setState({ interiores: res.data })
      })
  }

  render() { 
    const { open } = this.state;   
    return (
      <div>  

        {/*{this.state.interiores.map(item =>*/}
          <div>
            <button onClick={this.onOpenModal}>Open modal</button>
            <Modal open={open} onClose={this.onCloseModal}  onExited={this.onExited} top>
            
          <h2>Simple centered modal</h2>
          <p>
            {/*{item.texto}*/}
          </p>
        </Modal>
               <br/>
               <br/>
               <br/>
               <br/>

             
        {/*
         <Link onClick={showBGImage} className="home-link" to='/'>Mauro Bitar<br />
                <small className="home-link">arquiteto</small>
              </Link>
        */}
			         <Router>
                 <div className="gallery">
                 <a href="/images/int_02.jpg" className="big"><img src="/images/int_02_thumb.jpg" alt="" title="Beautiful Image" /></a>
                 <Link className="big" to='/images/int_02.jpg'>
                   <img src="/images/int_02_thumb.jpg" alt="" title="Beautiful Image" />
                 </Link>
                 </div>
	             </Router> 
               </div>
		   
                     
        {/*)}*/}
           
      </div>
    )
  }
  
}
  


export default Interiores;













