import React, { Component } from "react";
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  state = {
    largeImageURL: this.props.largeImageURL
  }

  openModal = () => {
    this.props.openModal(this.state.largeImageURL)
  }

  render() {
    const { webformatURL, id } = this.props;
    return (
      <li className="ImageGalleryItem" id={id}>
        <img src={webformatURL} alt="" className="ImageGalleryItem-image" onClick={this.openModal}/>
      </li>
    );
  }
}

ImageGalleryItem.propTypes  = {
  webformatURL: PropTypes.string,
  id: PropTypes.string,
}

export default ImageGalleryItem;
