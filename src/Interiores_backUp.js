import React, { Component } from 'react'
import axios from 'axios'
import Lightbox from 'react-image-lightbox';
import "react-image-lightbox/style.css";
const URL_INTERIORES = 'http://localhost:3001/interiores';


//render() {
  //const { interiores, photoIndex, isOpen } = this.state; // Added 'interiores'

  // Link to static root and make a relative path for each iamge
  //const staticRoot = '//localhost:3001/interiores/'
  //const images = interiores[0].images.map(i => staticRoot + i)

  // Rest of your code
//}    

/*
const images = [
  '//placekitten.com/1500/500',
  '//placekitten.com/4000/3000',
  '//placekitten.com/800/1200',
  '//placekitten.com/1500/1500'
];
*/

const images = []


class Interiores extends Component {
  constructor(props) {
    super(props)
    this.state = {     
      interiores: [],
      photoIndex: 0,
      isOpen: false
    }

  }

  componentDidMount() {
    axios.get(URL_INTERIORES)
      .then(res => {
        this.setState({ interiores: res.data })
      })
  }

  render() {
    const { photoIndex, isOpen, interiores } = this.state;
    const images = interiores[0].fotos.map(i => URL_INTERIORES + i)
    return (
      <div>
        <button type="button" onClick={() => this.setState({ isOpen: true })}>
          Open Lightbox
        </button>

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
        
        {this.state.interiores.map(item =>
          <div>
            <p>{item.texto}</p>
            <ul>
              {                
                item.fotos.map(foto => <li><a><img src={`/images/${foto}`}/></a></li>)
              }
            </ul>
          </div>
        )}
       
      </div>
    )
  }
}
  


export default Interiores;













