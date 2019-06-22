import React from "react";

function Header() {
  var ulStyle = {
    listStyleType: "none",
    margin: "0",
    padding: "0",
    overflow: "hidden",
    backgroundColor: "#333"
  };

  var liStyle = {
    float: "left"
  };

  var aLinkTag = {
    display: "block",
    color: "white",
    textAlign: "center",
    padding: "14px 16px",
    textDecoration: "none",
    hover: {
      backgroundColor: "black"
    }
  };

  return (
    <ul style={ulStyle}>
      <li style={liStyle}>
        <a style={aLinkTag} href="localhost:3000">
          Home
        </a>
      </li>
      <li style={liStyle}>
        <a style={aLinkTag} href="localhost:3000">
          News
        </a>
      </li>
      <li style={liStyle}>
        <a style={aLinkTag} href="localhost:3000">
          Contact
        </a>
      </li>
      <li style={liStyle}>
        <a style={aLinkTag} href="localhost:3000">
          About
        </a>
      </li>
    </ul>
  );
}

export default Header;
