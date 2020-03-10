import React from "react";
import { Router, Link } from "@reach/router";
import Topic from "./Topic";

function Topics(props) {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to="rendering">Rendering with React</Link>
        </li>
        <li>
          <Link to="components">Components</Link>
        </li>
        <li>
          <Link to="components-v-state">Props v. State</Link>
        </li>
      </ul>
      <Router>
        <Topic path=":topic" />
      </Router>
    </div>
  );
}

export default Topics;
