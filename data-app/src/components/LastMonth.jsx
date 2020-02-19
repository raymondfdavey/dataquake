import React, { Component } from "react";
import { HorizontalBar } from "react-chartjs-2";

class LastMonth extends Component {
  state = {
    userInfo: []
  };

  render() {
    return this.state.userInfo.length ? null : (
      <div>
        <h2 id= "last30title">10 Biggest Earthquakes last 30 days</h2>
        <HorizontalBar
          data={this.props.dataForGraphing}
          width={650}
          height={250}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    );
  }
}

export default LastMonth;
