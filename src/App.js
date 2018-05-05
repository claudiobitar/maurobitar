import React, { Component } from 'react';
import Coluna1 from './Coluna1'
import Coluna2 from './Coluna2'


class App extends Component {
  constructor(props) {
    super(props)
    this.drawCanvas = this.drawCanvas.bind(this)
  }


  drawCanvas() {

    const c = document.getElementById("canvas");
    const lineH = c.getContext("2d");
    const lineV = c.getContext("2d");
    c.width = window.innerWidth;
    c.height = window.innerHeight;

    const lineColor = "grey"

    const positionCanvas = () => {
      lineV.clearRect(0, 0, c.width, c.height);
      const position1 = document.querySelector('.coluna2').offsetLeft
      const position2 = document.querySelector('.parte-inferior').offsetTop + 124

      lineH.fillStyle = lineColor;
      lineH.fillRect(0, position2, window.innerWidth, 2);

      lineH.fill();

      lineV.fillStyle = lineColor;
      lineV.fillRect(position1 , 0, 2, window.innerHeight);

      lineV.fill();
    }

    positionCanvas()


    window.onresize = () => {
      this.drawCanvas()
    }

  }

  componentDidMount() {
    this.drawCanvas()
  }


  render() {
    return (
      <div>
        <canvas id="canvas"></canvas>
        <div className="wrapper-all">
          <Coluna1 />
          <Coluna2 />
        </div>
      </div>
    )
  }
}


export default App;
