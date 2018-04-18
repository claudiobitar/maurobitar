import React, { Component } from 'react'
import PortfolioMenu from './PortfolioMenu'

class Portfolio extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visibleP: true
    }

    this.handleMenuClick = this.handleMenuClick.bind(this);
  }


  handleMenuClick() {
    this.setState({
      visibleP: false
    })

  }



  render() {
    return (
      <div>
        <div className="wrapper2">
          {
            this.state.visibleP &&
            <p>
              Apresento aqui uma seleção dos trabalhos que fiz a partir de 1993. São mostrados os desenhos que foram sendo feitos para cada encomenda.
        Em "estudos" estão alguns desenhos que faço em momentos de devaneio. Um ou outro, que por algum motivo me agradou um pouco mais, foi guardado.
        Os fundamentos que utilizo para projetar vêm de fontes diversas e estão sempre sendo elaborados e atualizados. Quanto a eles, prefiro não ter muitas certezas.
      </p>
          }

        </div>
        <PortfolioMenu handleMenuClick={this.handleMenuClick} />
      </div>
    )
  }
}


export default Portfolio