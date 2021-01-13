import React, { Component } from "react";

class Modal extends Component {
  componentDidMount(){
    window.addEventListener('keydown', this.removeListener)
  }

  componentWillUnmount(){
    window.removeEventListener('keydown', this.removeListener)
  }

  removeListener= (e) => {
    e.key === 'Escape' && this.props.onClose()
  }

  clickToOverlay = () => {
    this.props.onClose()
  }

  render() {
    return (
      <div className="Overlay" onClick={this.clickToOverlay}>
        <div className="Modal">
          <img src={this.props.url} alt='loading' />
        </div>
      </div>
    );
  }
}

export default Modal;
