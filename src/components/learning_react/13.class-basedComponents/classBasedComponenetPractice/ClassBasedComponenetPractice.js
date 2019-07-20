import React from "react";
import Header from "./Header";
import Greeting from "./Greeting";

class ClassBasedComponenet extends React.Component {
  render() {
    return (
      <div>
        <h1>Practice classBased Componenet</h1>
        <Header username="ben gala" />
        <Greeting />
      </div>
    );
  }
}

export default ClassBasedComponenet;
