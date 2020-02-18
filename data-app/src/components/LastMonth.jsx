import React, { Component } from "react";

class LastMonth extends Component {
  state = {
    userInfo: []
  };

  render() {
    return this.state.userInfo.length
      ? null
      : this.props.pastMonth.map(quake => console.log(quake));
  }
}

export default LastMonth;
