import React, { Component } from "react";
import "./App.css";
import MostRecent from "./components/MostRecent";
import LastMonth from "./components/LastMonth";
import LastYear from "./components/LastYear";

class App extends Component {
  state = {
    quakes: [],
    pastMonth: [],
    pastYear: []
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
          <section>
            <LastMonth pastMonth={this.state.pastMonth} />
          </section>
        </section>
        <section id="last year">
          <h2>Biggest in the Last Year</h2>
          <section>
            <LastYear />
          </section>
        </section>
      </main>
    );
  }

  componentDidMount = () => {
    this.recentQuakes().then(quakes => {
      return this.setState({ quakes: quakes.features });
    });

    this.lastMonth().then(lastMonthQuakes => {
      return this.setState({ pastMonth: lastMonthQuakes.features });
    });
  };

  recentQuakes = () => {
    const url =
      "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&limit=5";
    return fetch(url).then(response => {
      return response.json();
    });
  };

  lastMonth = () => {
    const url =
      "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&orderby=magnitude&limit=10";
    return fetch(url).then(response => {
      return response.json();
    });
  };
}

export default App;
