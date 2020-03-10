import React, { Component } from "react";
import * as api from "./api";
class About extends Component {
  state = { artistInfo: [], loading: true };
  render() {
    return this.state.loading ? (
      <p>loading</p>
    ) : (
      <div className="header">
        <h1>Led Zeppelin</h1>
        <p>{this.state.artistInfo.bio.summary}</p>
      </div>
    );
  }
  componentDidMount() {
    api.fetchZeppelinArtistData().then(artistData => {
      this.setState({ artistInfo: artistData, loading: false });
    });
  }
}

export default About;
