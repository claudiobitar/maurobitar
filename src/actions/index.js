import axios from 'axios'

export function showBGImage(e) {
  let element = document.querySelector('.menu-principal')
  if (e.target.classList.contains('home-link')) {
    element.style.backgroundImage = 'url(/static/media/col3_esq.2c4ef96b.gif)'
  } else {
    element.style.backgroundImage = 'none'  
  }

  return {
    type: 'SHOW_BG_IMAGE',
    payload: []
  }
}

const URL_INTERIORES = 'http://localhost:3001/interiores';

export function getInteriores() {  
  
  const request = axios.get(URL_INTERIORES)
    .then(res => {
      this.setState({ interiores: res.data}) 
    }) 
  
    return {
      type: 'GET_INTERIORES',
      payload: request
    }  
  }
    
  
     
  
