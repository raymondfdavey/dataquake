const createGraphData = array => {
  const newObj = {
    datasets: [
      {
        data: [],
        backgroundColor: [
          "#FF6384",
          "#4BC0C0",
          "#FFCE56",
          "#E7E9ED",
          "#36A2EB",
          "#FF6384",
          "#4BC0C0",
          "#FFCE56",
          "#E7E9ED",
          "#36A2EB",
          "#E7E9ED",
          "#36A2EB"
        ],
        label: "My dataset" // for legend
      }
    ],
    labels: []
  };
  array.forEach(earthquake => {
    newObj.labels.push(earthquake.properties.place);
    newObj.datasets[0].data.push(earthquake.properties.mag);
  });
  return newObj;
};

export default createGraphData;
