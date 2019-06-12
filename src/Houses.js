import React, { Component } from 'react'
import Modal from 'react-responsive-modal';
import Lightbox from 'react-lightbox-component';
import { noMoreLonelyWords } from './utilities/utilities.js';

class Houses extends Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      totalHouses: [],
      currentHouse: [],
      name: [],
      photos: [],
      text: [],
      open: false,
      currentPage: 1,
      currentPhotoPage: 1,
      photosPerPage: 8
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClickPrev = this.handleClickPrev.bind(this);
    this.handleClickNext = this.handleClickNext.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClickNext2 = this.handleClickNext2.bind(this);
    this.handleClickPrev2 = this.handleClickPrev2.bind(this);
  }

  componentDidMount() {
    this.setState({
      totalHouses: this.props.data.length,
      currentHouse: this.props.data
    })
  }

  componentDidUpdate() {
    noMoreLonelyWords("p", 2)
  }

  handleClick(event) {
    this.state.currentHouse &&
      this.setState({
        currentPage: Number(event.target.id),
        index: Number(event.target.id - 1),
        currentPhotoPage: Number(1)
      });
  }

  handleClickPrev(event) {
    if (this.state.currentHouse && this.state.currentPage > 1) {
      this.setState({
        currentPage: Number(this.state.currentPage - 1),
        index: this.state.index -= 1
      });
    }
    else {
      event.preventDefault()
    }
  }

  handleClickNext(event) {
    if (this.state.currentHouse && this.state.currentPage < this.state.totalHouses) {
      this.setState({
        currentPage: Number(this.state.currentPage + 1),
        index: this.state.index += 1,
        currentPhotoPage: Number(1)
      });
    } else {
      event.preventDefault()
    }
  }

  handleClick2(event) {
    this.state.currentPhotoPage &&
      this.setState({
        currentPhotoPage: Number(event.target.id)
      });
  }

  handleClickNext2(event) {
    if (this.state.currentPhotoPage < this.state.photosPerPage) {
      this.setState({
        currentPhotoPage: Number(this.state.currentPhotoPage + 1)
      });
    } else {
      event.preventDefault()
    }
  }


  handleClickPrev2(event) {
    if (this.state.currentPhotoPage > 1) {
      this.setState({
        currentPhotoPage: Number(this.state.currentPhotoPage - 1)
      });
    }
    else {
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
    const { totalHouses, currentHouse, index, currentPage, photosPerPage, currentPhotoPage } = this.state;
    // Logic for displaying current photos
    const indexOfLastPhoto = currentPhotoPage * photosPerPage;
    const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
    const currentPhotos = currentHouse[index] && currentHouse[index].photos.slice(indexOfFirstPhoto, indexOfLastPhoto);

    // Logic for displaying page numbers

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalHouses); i++) {
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
          {(number < this.state.totalHouses) &&
            <span className="pipe">
              &#124;
           </span>
          }
        </li>
      );
    });

    // Logic for displaying page numbers in internal pagination

    const pageNumbers2 = [];
    for (let i = 1; i <= Math.ceil(currentHouse[index] && currentHouse[index].photos.length / photosPerPage); i++) {
      pageNumbers2.push(i);
    }


    const renderPageNumbers2 = pageNumbers2.map(number => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.handleClick2}
          className={currentPhotoPage === number ? 'active' : ''}
        >
          {number}
          {(number < currentHouse[index].photos.length / photosPerPage) &&
            <span className="pipe">
              &#124;
           </span>
          }
        </li>
      );
    });

    /*Do the images distribution */

    while (currentPhotos && currentPhotos.length > 4 && currentPhotos.length < photosPerPage) {
      currentPhotos.push('blank_space');
    }

    while (currentPhotos && currentPhotos.length < 4) {
      currentPhotos.push('blank_space');
    }

    const images = currentPhotos && currentPhotos.filter(function (value, index) {
      return value != 'blank_space'
    });

    const renderImages = images && images.map((photo, index) => {
      return (
        {
          src: `../images/${photo}`
        }
      )
    })

    const decorativeImages =
      currentPhotos && currentPhotos.map((img, index) => {
        while (img === 'blank_space') {
          return (
            '../images/blank_space_img.jpg'
          )
        }
      })

    return (
      <div className="wrapper-portfolio-pages">
        <h3>{currentHouse.length && currentHouse[index] && currentHouse[index].name}</h3>
        <button className="button" onClick={this.onOpenModal}>• sobre o projeto</button>
        <Modal open={this.state.open} onClose={this.onCloseModal} onExited={this.onExited} top>
          <div>
            {currentHouse && currentHouse[index] && currentHouse[index].text.map((t) => {
              return (
                <p key={t}>
                  {t}
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
          {/* Internal pagination*/}
          <div className="internal-pagination">
            {currentHouse && currentHouse[index] && currentHouse[index].photos.length > photosPerPage &&
              <div className="page-numbers-container">
                {(this.state.currentPhotoPage > 1) &&
                  <a href='javascript:;' className="prev-button" onClick={this.handleClickPrev2}>&lt;</a>
                }
                <ul className="page-numbers">
                  {renderPageNumbers2}
                </ul>
                {(indexOfFirstPhoto < currentHouse[index].photos.length / photosPerPage) &&
                  <a href='javascript:;' className="next-button" onClick={this.handleClickNext2}>&gt;</a>
                }
              </div>
            }
          </div>


          <div className="gallery images-box-1 big">
            {
              this.state && this.state.currentHouse && this.state.currentHouse.length && this.state.currentHouse.length > 0
                ? <Lightbox images={renderImages} />
                : null
            }

            {decorativeImages && decorativeImages.map((img, index) => (
              <img key={index} src={img} />
            ))}

          </div>

          {/* External pagination*/}
          <div className="page-numbers-container">
            {(this.state.currentPage > 1) &&
              <a href='javascript:;' className="prev-button" onClick={this.handleClickPrev}>&lt;</a>
            }
            <ul className="page-numbers">
              {renderPageNumbers}
            </ul>
            {(this.state.currentPage < this.state.totalHouses) &&
              <a href='javascript:;' className="next-button" onClick={this.handleClickNext}>&gt;</a>
            }
          </div>
        </div>
      </div>
    )
  }

}

export default Houses
