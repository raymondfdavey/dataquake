import createGraphData from "../utils/utils";

const fetchedData = {
  type: "Feature",
  properties: {
    mag: 7.7,
    place: "124km NNW of Lucea, Jamaica",
    time: 1580238624922,
    updated: 1581917681793,
    tz: -300,
    url: "https://earthquake.usgs.gov/earthquakes/eventpage/us60007idc",
    detail:
      "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=us60007idc&format=geojson",

  }
};

it("", () => {
  expect(fetchedData).toBe({{
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
    }});
});
