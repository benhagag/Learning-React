import React from "react";

class ChildState extends React.Component {
  render() {
    return (
      <div>
        <h2> {this.props.textForChild}</h2>
      </div>
    );
  }
}

export default ChildState;
