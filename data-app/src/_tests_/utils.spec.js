import createGraphData from "../utils/utils";

const fetchedData = [
  {
    type: "Feature",
    properties: {
      mag: 9,
      place: "Jamaica",
      time: 1580238624922,
      updated: 1581917681793,
      tz: -300,
      url: "https://earthquake.usgs.gov/earthquakes/eventpage/us60007idc",
      detail:
        "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=us60007idc&format=geojson"
    }
  },
  {
    type: "Feature",
    properties: {
      mag: 6,
      place: "France",
      time: 1580238624922,
      updated: 1581917681793,
      tz: -300,
      url: "https://earthquake.usgs.gov/earthquakes/eventpage/us60007idc",
      detail:
        "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=us60007idc&format=geojson"
    }
  },
  {
    type: "Feature",
    properties: {
      mag: 1,
      place: "Wales",
      time: 1580238624922,
      updated: 1581917681793,
      tz: -300,
      url: "https://earthquake.usgs.gov/earthquakes/eventpage/us60007idc",
      detail:
        "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=us60007idc&format=geojson"
    }
  }
];

it("", () => {
  const input = fetchedData;
  const output = createGraphData(input);
  expect(output).toEqual({
    labels: ["Jamaica", "France", "Wales"],
    datasets: [
      {
        label: "Earthquakes",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [9, 6, 1]
      }
    ]
  });
});
