import React from "react";

class HandlingEvents extends React.Component {
  constructor() {
    super();
    this.state = { img: "https://www.fillmurray.com/200/100" };
  }
  handleClick() {
    alert("click Event works !");
  }
  handleMouseOver() {
    alert("mouseover works");
  }
  render() {
    return (
      <div>
        <p>Click event</p>
        <button onClick={this.handleClick}>Click Me !</button>
        <br />
        <img
          src={this.state.img}
          alt="over me"
          onMouseOver={this.handleMouseOver}
        />
      </div>
    );
  }
}

export default HandlingEvents;
