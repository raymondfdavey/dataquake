import React from "react";

function MostRecent(props) {
  return (
    <div>
      {props.recentQuakes.map(quake => {
        const { properties } = quake;
        const convertedDate = new Date(properties.time);
        return (
          <ul key={properties.code}>
            <li>Location: {properties.place}</li>
            <li>Magnitude: {properties.mag}</li>
            <li>Time: {convertedDate.toGMTString()}</li>
            <li>
              <a href={properties.url}>More Info </a>
            </li>
            <br />
          </ul>
        );
      })}
    </div>
  );
}

export default MostRecent;
