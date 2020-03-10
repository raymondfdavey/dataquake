import axios from "axios";

export const fetchZeppelinArtistData = () => {
  console.log("IN artist data MATEY");

  return axios
    .get(
      "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&mbid=d6e0e274-8e19-44ce-b5b2-52c12f8a674a&api_key=92feac752dcc00df17a3db9746a659ef&format=json"
    )
    .then(({ data: { artist } }) => {
      return artist;
    });
};

export const fetchZeppelinTopAlbumsData = () => {
  console.log("IN albums  MATEY");

  return axios
    .get(
      "http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=ledzeppelin&api_key=92feac752dcc00df17a3db9746a659ef&format=json"
    )
    .then(({ data: { topalbums } }) => {
      return topalbums;
    });
};

export const fetchAlbumDetails = (albumName, albumArtist) => {
  console.log("IN album detauil  MATEY");

  return axios
    .get(
      `http://ws.audioscrobbler.com/2.0/?method=album.getinfo&artist=led zeppelin&album=${albumName}&api_key=92feac752dcc00df17a3db9746a659ef&format=json`
    )
    .then(({ data: { album } }) => {
      return album;
    });
};
