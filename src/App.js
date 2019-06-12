import React, { Component } from 'react';
import Column1 from './Column1'
import Column2 from './Column2'
import FooterMobile from './FooterMobile'

class App extends Component {
  constructor(props) {
    super(props)
    this.drawCanvas = this.drawCanvas.bind(this)
    this.onResize = this.onResize.bind(this)    
  }  

  drawCanvas() {
    const c = document.getElementById("canvas");
    const lineH = c.getContext("2d");
    const lineV = c.getContext("2d");
    c.width = window.innerWidth;
    c.height = window.innerHeight;

    const lineColor = "grey"

    let element = document.querySelector('div')

    const positionCanvas = () => {
      lineV.clearRect(0, 0, c.width, c.height);
      let position1 = document.querySelector('.coluna2').offsetLeft
      let position2 = document.querySelector('.parte-inferior').offsetTop + 124

      //bug correction - It avoids the canvas line displace when the vertical scroll appears     
      if (document.body.scrollHeight > (window.innerHeight - 128)) {
        position1 += 10;
      }

      lineH.fillStyle = lineColor;
      lineH.fillRect(0, position2, window.innerWidth, 2);

      lineH.fill();

      lineV.fillStyle = lineColor;
      lineV.fillRect(position1, 0, 2, window.innerHeight);

      lineV.fill();
    }

    positionCanvas()
  }


  onResize() {
    this.drawCanvas();
  }


  modalToggled(on) {
    this.setState({ modalOn: on });
  }


  componentDidMount() {
    this.drawCanvas()
    window.addEventListener('resize', this.onResize)

  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize)
    window.removeEventListener('onscroll', this.onScroll)
  }

  render() {
    return (
      <div>
        <canvas id="canvas"></canvas>
        <div className="wrapper-all">
          <Column1 />
          <Column2 />
          <FooterMobile />
        </div>

      </div>
    )
  }
}


export default App;
