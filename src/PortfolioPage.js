import React, { Component } from 'react'
import axios from 'axios'
import Modal from 'react-responsive-modal';
import Lightbox from 'react-lightbox-component';

class PortfolioPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      result: [],
      resultHeader: [],
      resultPhotos: [],
      resultText: [],
      resultModalLinkText: [],
      open: false,
      currentPage: 1,
      itemsPerPage: 8
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleClickPrev = this.handleClickPrev.bind(this);
    this.handleClickNext = this.handleClickNext.bind(this);
  }

  componentDidMount() {
    this.setState({
      result: this.props.data,
      resultPhotos: this.props.data.photos,
      resultHeader: this.props.data.header,
      resultText: this.props.data.text,
      resultModalLinkText: this.props.data.modalLinkText
    })
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  handleClickPrev(event) {
    if (this.state.currentPage > 1) {
      this.setState({
        currentPage: Number(this.state.currentPage - 1)
      });
    }
    else {
      event.preventDefault()
    }
  }

  handleClickNext(event) {
    if (this.state.currentPage < this.state.resultPhotos.length / this.state.itemsPerPage) {
      this.setState({
        currentPage: Number(this.state.currentPage + 1)
      });
    } else {
      event.preventDefault()
    }
  }

  onOpenModal = () => {
    this.setState({ open: true });
    document.querySelector('#canvas').style.display = 'none'
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };


  onExited = () => {
    document.querySelector('#canvas').style.display = 'block'
  }


  render() {
    const { result, resultHeader, resultPhotos, resultText, currentPage, itemsPerPage } = this.state;
    // Logic for displaying current photos
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = resultPhotos.slice(indexOfFirstItem, indexOfLastItem);

    // Logic for displaying page numbers

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(resultPhotos.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.handleClick}
          className={currentPage === number ? 'active' : ''}
        >
          {number}
          {(number < this.state.resultPhotos.length / this.state.itemsPerPage) &&
            <span className="pipe">
              &#124;
          </span>
          }
        </li>
      );
    });


    while (currentItems.length && currentItems.length !== itemsPerPage) {
      currentItems.push('blank_space');
    }

    const images = currentItems && currentItems.filter(function (value, index, arr) {
      return value != 'blank_space'
    });


    const renderImages = images && images.map((foto, index) => {
      return (
        {
          src: `../images/${foto}.jpg`
        }
      )
    })

    const decorativeImages =
      currentItems && currentItems.map((img, index) => {
        while (img === 'blank_space') {
          return (
            '../images/blank_space_img.jpg'
          )
        }
      })

    return (
      <div className="wrapper-portfolio-pages">
        <h3>{resultHeader}</h3>
        <button className="button" onClick={this.onOpenModal}>• {this.state.resultModalLinkText}</button>
        <Modal open={this.state.open} onClose={this.onCloseModal} onExited={this.onExited} top>
          <div>
            {resultText.map((text, index) => {
              return (
                <p>
                  {text}
                </p>
              )
            })
            }
          </div>
        </Modal>
        <br />
        <br />
        <br />
        <br />
        <div>
          <div className="gallery images-box-1 big">
            <Lightbox images={renderImages} />
            {decorativeImages && decorativeImages.map(img => (
              <dvi>
                <img src={img} />
              </dvi>
            ))}
          </div>
          <div className="page-numbers-container">
            {(this.state.currentPage > 1) &&
              <a className="prev-button" onClick={this.handleClickPrev}>&lt;</a>
            }
            <ul className="page-numbers">
              {renderPageNumbers}
            </ul>
            {(this.state.currentPage < this.state.resultPhotos.length / this.state.itemsPerPage) &&
              <a className="next-button" onClick={this.handleClickNext}>&gt;</a>
            }
          </div>
        </div>
      </div>
    )
  }

}

export default PortfolioPage
