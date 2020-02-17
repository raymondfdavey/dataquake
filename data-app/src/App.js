import React, { Component } from "react";
import "./App.css";
import MostRecent from "./components/MostRecent";
import LastMonth from "./components/LastMonth";
import LastYear from "./components/LastYear";

class App extends Component {
  state = {
    quakes: []
  };

  render() {
    return (
      <main>
        <h1>EARTHQUAKES</h1>
        <section id="most recent">
          <h2>Most Recent Earthquakes</h2>
          <ul>
            {this.state.quakes.length ? (
              <MostRecent recentQuakes={this.state.quakes} />
            ) : (
              "most recent earthquakes..."
            )}
          </ul>
        </section>
        <section id="last month">
          <h2>Biggest Earthquakes in the Last Month</h2>
          <body>
            <LastMonth />
          </body>
        </section>
        <section id="last year">
          <h2>Biggest in the Last Year</h2>
          <body>
            <LastYear />
          </body>
        </section>
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
