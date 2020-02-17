import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    quakes: []
  };

  render() {
    return (
      <main>
        <h1>EARTHQUAKE INFO</h1>
        <ul>
          {this.state.quakes.length
            ? this.state.quakes.map(quake => {
                return (
                  <ul>
                    <li>Location: {quake.properties.place}</li>
                    <li>Magnitude: {}</li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                );
              })
            : "nothing to display"}
        </ul>
      </main>
    );
  }

  componentDidMount = () => {
    this.recentQuakes().then(quakes => {
      console.log(quakes.features);
      return this.setState({ quakes: quakes.features });
    });
  };

  recentQuakes = () => {
    const url =
      "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&limit=5";
    return fetch(url).then(response => {
      return response.json();
    });
  };
}

export default App;
