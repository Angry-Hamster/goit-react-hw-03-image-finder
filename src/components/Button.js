import React, { Component } from "react";

class Buttton extends Component {
  componentDidMount() {
    this.goToBottom();
  }

  goToBottom = () => {
    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }, 500);
  };

  clickToBtn = () => {
    this.props.getMore();
    this.goToBottom();
  };

  render() {
    return (
      <>
        <button className="Button" onClick={this.clickToBtn}>
          Load More
        </button>
      </>
    );
  }
}

export default Buttton;
