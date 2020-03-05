import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import * as data from "../data/data.json";
import QuakeChart from "./QuakeChart.jsx";
import QuakeList from "./QuakeList.jsx";

class QuakeMap extends Component {
  state = { quakeData: null, activeQuake: null };
  setActiveQuake = quake => {
    this.setState({ activeQuake: quake });
  };
  resetActiveQuake = () => {
    this.setState({ activeQuake: null });
  };
  render() {
    const { activeQuake } = this.state;
    return (
      <>
        <div className="mapSection">
          <Map center={[35.689487, 139.691711]} zoom={1}>
            <TileLayer
              url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {data.features.map(quake => {
              console.log(quake.properties.title, quake.geometry.coordinates);
              return (
                <Marker
                  key={quake.id}
                  position={[
                    quake.geometry.coordinates[1],
                    quake.geometry.coordinates[0]
                  ]}
                  onClick={() => {
                    this.setActiveQuake(quake);
                  }}
                />
              );
            })}
            {activeQuake && (
              <Popup
                position={[
                  activeQuake.geometry.coordinates[1],
                  activeQuake.geometry.coordinates[0]
                ]}
                onClose={() => {
                  this.resetActiveQuake();
                }}
              >
                <div>
                  <h2>{activeQuake.properties.place}</h2>
                  <p>{activeQuake.properties.mag}</p>
                  <p>{activeQuake.properties.url}</p>
                </div>
              </Popup>
            )}
          </Map>
          <div className="sideBar">
            <p>last 30 days quakes</p>
            <p>todays quakes</p>
            <p>past 6 months quakes</p>
            <p>past yars quakes</p>
          </div>
        </div>
        <div className="bottomBar">
          <QuakeList />
          <QuakeChart
            quakeData={this.state.quakeData}
            activeQuake={this.state.activeQuake}
          />
        </div>
      </>
    );
  }
}

export default QuakeMap;
