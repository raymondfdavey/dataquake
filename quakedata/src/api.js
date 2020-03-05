import axios from "axios";

export const fetchToday = () => {};

export const fetchPastMonths = () => {};

export const fetchTopTenThisMonth = () => {};

export const fetchTopTenThisYear = () => {};

export const fetchTopTenAllTime = () => {};

// this year: https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2020-01-01&minmagnitude=5.0

//this month:
//https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2020-03-01&minmagnitude=5.0

//top ten year https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2020-01-01&orderby=magnitude&limit=10

//top ten month https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2020-03-01&orderby=magnitude&limit=10

//IF TIME........today->
// todays date into iso

// top ten today: https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2020-01-01&minmagnitude=5.0&orderby=magnitude&limit=10
/*
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
*/
