import React from "react";
import { Router, Link } from "@reach/router";
import Home from "./components/Home";
import About from "./components/About";
import Topics from "./components/Topics";

const App = () => (
  <>
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/about">
        <button>About</button>
      </Link>
      <Link to="/topics">
        <button>Topics</button>
      </Link>
    </nav>
    <Router>
      <Home path="/" />
      <About path="/about" />
      <Topics path="/topics/*" />
    </Router>
  </>
);
{
  /* 
// const Home = () => (
//   <div>
//     <h2>Home</h2>
//   </div>
// );

// const About = () => (
//   <div>
//     <h2>About</h2>
//   </div>
// );

// const Topics = () => (
//   <div>
//     <h2>Topics</h2>
//   </div>
// ); */
}

export default App;
