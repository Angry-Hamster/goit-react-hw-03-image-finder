import React, { Component } from "react";
import "./App.css";

import ImageGallery from "./components/ImageGallery";
import Searchbar from "./components/Searchbar";
import Button from "./components/Button";
import Loader from "./components/Loader";

class App extends Component {
  state = {
    info: {
      qwery: "",
      page: 1,
    },
    content: [],

    isOpenLoader: false,
  };

  handleGetQwery = (q) => {
    this.setState({ info: { qwery: q, page: 2 } });

    this.setState({ isOpenLoader: true });
    this.callToServer(q, 1).then((data) => {
      this.setState({ content: [...data.hits] });
    });

    this.setState({ isOpenLoader: false });
  };

  callToServer = (q, page) => {
    let key = "18650825-85dd9ce829ef20624228a2c85";
    let url = `https://pixabay.com/api/?q=${q}&page=1&key=${key}&image_type=photo&orientation=horizontal&per_page=12&page=${page}`;

    return fetch(url)
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        return data;
      });
  };

  handleGetMore = () => {
    const { qwery, page } = this.state.info;
    this.setState((prev) => ({ info: { page: prev.info.page + 1, qwery: prev.info.qwery } }));

    this.setState({ isOpenLoader: true });

    this.callToServer(qwery, page).then((data) => {
      this.setState((prev) => ({ content: [...prev.content, ...data.hits] }));
    });

    this.setState({ isOpenLoader: false });
  };

  render() {
    return (
      <>
        <Searchbar getQwery={this.handleGetQwery} />
        <ImageGallery picture={this.state.content} />

        {this.state.content.length !== 0 && <Button getMore={this.handleGetMore} />}

        {this.state.isOpenLoader && <Loader />}
      </>
    );
  }
}

export default App;
