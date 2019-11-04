import React from "react";
import Conditional from "./Conditional";

/*
 * A simple code how to use Loading element.
 * In case the component still loading (example because it is waiting for a response from the API) the componenet will return us the loading sign.
 * But in case the the component stops loading (get response form the API) we will represent the componenet we want to which in this case is a child of ReactConditionalRender.
 */

class ReactConditionalRender extends React.Component {
  constructor() {
    // 🔴 Can’t use `this` yet
    /* super(props); */
    // ✅ Now it’s okay though

    super();
    this.state = {
      isLoading: true
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 1500);
  }

  render() {
    return (
      <div>{this.state.isLoading ? <h1>Loading...</h1> : <Conditional />}</div>
    );
  }
}

export default ReactConditionalRender;
