import React, { Component } from "react";

import ImageGalleryItem from "./ImageGalleryItem";
import Modal from "./Modal";

class ImageGallery extends Component {
  state = {
    isOpen: false,
    url: '',
  }

  openModal = (url) => {
    this.setState((prev) => ({ isOpen: !prev.isOpen, url: url }))
  }

  closeModal = () => {
    this.setState((prev) => ({ isOpen: !prev.isOpen }))
  }

  render() {
    return (
      <>
        <ul className="ImageGallery">
          {this.props.picture.map((e, i) => {
            return <ImageGalleryItem key={i} id={e.id} webformatURL={e.webformatURL} largeImageURL={e.largeImageURL} openModal={this.openModal}/>;
          })}
        </ul>

        {this.state.isOpen && <Modal url={this.state.url} onClose={this.closeModal}/>}
      </>
    );
  }
}

export default ImageGallery;
