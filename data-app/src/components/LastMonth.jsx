import React, { Component } from "react";

import { Bar } from "react-chartjs-2";

class LastMonth extends Component {
  state = {
    userInfo: [],
    dataForGraphing: {},
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Earthquakes",
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    }
  };

  render() {
    return this.state.userInfo.length ? null : (
      //  this.props.pastMonth.map(quake => console.log(quake))

      <div>
        <h2>Biggest Earthquakes in the Last Month(custom size)</h2>
        <Bar
          data={this.state.data}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
  }
}

export default LastMonth;
