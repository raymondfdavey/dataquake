import React, { Component } from "react";
import * as api from "./api";
import About from "./About";
import Albums from "./Albums";
import { Router } from "@reach/router";
import AlbumPage from "./AlbumPage";

class App extends Component {
  state = { artistInfo: [], albumsInfo: [], loading: true };
  render() {
    return this.state.loading ? (
      <p>LOADING</p>
    ) : (
      <div className="wholePage">
        <About />
        <Albums />
        <Router>
          <AlbumPage path="/*" />
        </Router>
      </div>
    );
  }
  componentDidMount() {
    api
      .fetchZeppelinArtistData()
      .then(artistData => {
        this.setState({ artistInfo: artistData });
      })
      .then(
        api.fetchZeppelinTopAlbumsData().then(albumsData => {
          this.setState({ albumsInfo: albumsData, loading: false });
        })
      );
  }
}

export default App;
