import React from "react";

// inject Header inside MyInfo
import Header from "./Header.js";

function MyInfo() {
  var styleDiv = {
    color: "blue",
    fontSize: "20px"
  };

  return (
    <div style={styleDiv}>
      <Header />
      <h1>Ben Hagag</h1>
      <p>I Am A Full Stack Developer</p>
      <h2>Places I want to visit</h2>
      <ul>
        <li>New-York</li>
        <li>Washington</li>
        <li>San-Francsico</li>
      </ul>
    </div>
  );
}

export default MyInfo;
