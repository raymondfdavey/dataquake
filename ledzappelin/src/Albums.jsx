import React, { Component } from "react";
import * as api from "./api";
import AlbumTile from "./AlbumTile";
import AlbumPage from "./AlbumPage";
import { Router } from "@reach/router";

class Albums extends Component {
  state = { albumsInfo: [], loading: true, selectedAlbum: null };
  render() {
    return this.state.loading ? (
      <p>loading</p>
    ) : (
      <>
        <div className="albumsSection">
          <h2 className="albumsHead">ALBUMS</h2>
          <ul className="albumHolder">
            {this.state.albumsInfo.map(album => {
              if (album.name === "(null)") return null;
              return (
                <AlbumTile
                  key={album.name}
                  fetchAlbumDetails={this.fetchAlbumDetails}
                  album={album}
                />
              );
            })}
          </ul>
        </div>
        <AlbumPage path=":album" selectedAlbum={this.state.selectedAlbum} />
      </>
    );
  }

  componentDidMount() {
    api.fetchZeppelinTopAlbumsData().then(({ album }) => {
      this.setState({ albumsInfo: album, loading: false });
    });
  }

  fetchAlbumDetails = album => {
    api.fetchAlbumDetails(album.name, album.artist).then(albumDetails => {
      this.setState({ selectedAlbum: albumDetails });
    });
  };
}
export default Albums;
