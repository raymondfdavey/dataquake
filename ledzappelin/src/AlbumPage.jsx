import React from "react";

function AlbumPage(props) {
  return (
    <div>
      {!props.selectedAlbum ? null : (
        <div className="selectedAlbumPage">
          {!props.selectedAlbum.wiki ? null : (
            <p>{props.selectedAlbum.wiki.content}</p>
          )}
          <h1>{props.selectedAlbum.name}</h1>
          <ul>
            {props.selectedAlbum.tracks.track.map(track => {
              return (
                <li key={track.name}>
                  {track["@attr"].rank}
                  {track.name}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default AlbumPage;
