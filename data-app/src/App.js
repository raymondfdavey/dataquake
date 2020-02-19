import React, { Component } from "react";
import "./App.css";
import MostRecent from "./components/MostRecent";
import LastMonth from "./components/LastMonth";
import LastYear from "./components/LastYear";
import createGraphData from "./utils/utils";

class App extends Component {
  state = {
    quakes: [],
    pastMonth: [],
    pastYear: [],
    dataForGraphing: {}
  };

  render() {
    return (
      <main>
        <header>
          <h1>EARTHQUAKES</h1>
        </header>

        <body>
          <section id="mostrecent">
            <h2 id="last5title">Most Recent Earthquakes</h2>
            <ul id="biglist">
              {this.state.quakes.length ? (
                <MostRecent recentQuakes={this.state.quakes} />
              ) : (
                "most recent earthquakes..."
              )}
            </ul>
          </section>
          <div id="lastmonth">
            <LastMonth dataForGraphing={this.state.dataForGraphing} />
          </div>
          {/* <section id="last year">
            <h2>Biggest in the Last Year</h2>
            <section>
              <LastYear />
            </section>
          </section> */}
        </body>
      </main>
    );
  }

  componentDidMount() {
    this.recentQuakes().then(quakes => {
      return this.setState({ quakes: quakes.features });
    });

    this.lastMonth()
      .then(lastMonthQuakes => {
        return this.setState({ pastMonth: lastMonthQuakes.features });
      })
      .then(whatever => this.formatData());
  }

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

  formatData = () => {
    console.log(this.state.pastMonth);

    this.setState({
      dataForGraphing: createGraphData(this.state.pastMonth)
    });
  };
}

export default App;
