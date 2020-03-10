import React, { Component } from "react";
import * as api from "./api";

class App extends Component {
  state = { pokemon: [], loading: true };
  render() {
    return (
      <>
        {this.state.loading ? (
          <div>loading</div>
        ) : (
          <div className="nameContainer">
            {this.state.pokemon.map(pokemon => {
              return <p key={pokemon.name}>{pokemon.name}</p>;
            })}
          </div>
        )}
      </>
    );
  }
  componentDidMount() {
    api.fetchAllPoke().then(pokemon => {
      console.log(pokemon);
      this.setState({ pokemon: pokemon, loading: false });
    });
  }
}

export default App;
