import React from "react";

const hash = "#text";
function AlbumTile(props) {
  const { album } = props;
  return (
    <div className="albumTile">
      <li>
        <h1 onClick={() => props.fetchAlbumDetails(album)}>{album.name}</h1>
      </li>
      <li className="albumImageContainer">
        <img
          onClick={() => props.fetchAlbumDetails(album)}
          className="albumImage"
          src={album.image[2][hash]}
          alt={album.name}
        />
      </li>
    </div>
  );
}

export default AlbumTile;
