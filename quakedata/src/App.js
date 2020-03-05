import "./App.css";
import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import * as data from "./data/data.json";
import QuakeMap from "./components/QuakeMap";

class App extends Component {
  render() {
    return <QuakeMap />;
  }
}

export default App;
