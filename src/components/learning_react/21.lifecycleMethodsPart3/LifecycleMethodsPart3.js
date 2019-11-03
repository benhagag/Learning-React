//  https://scrimba.com/g/greacthooks  - link for course REACT HOOKS
import React from "react";
import randomcolor from "randomcolor"; // -> install packege by -> npm installrandom color

/*
    lesson for 
*/
class LifecycleMethodPart3 extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      color: ""
    };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }

  // first time the component is renderd it calls to componentDidMount() method
  componentDidMount() {
    console.log("DID MOUNT");
  }

  // after the copmponent is mounted (on first time that it was renderd) it calls to componentDidUpdate() method
  componentDidUpdate(prevProps, prevState) {
    console.log("DID UPDATE");

    if (prevState.count !== this.state.count) {
      // this if will prevent getting infinty loop because because the state will be chnaged only if the count was changed (which happen onclick)!
      const newColor = randomcolor(); // ->  will bring us css random color
      console.log(newColor);
      this.setState({ color: newColor });
    }

    /*
    ** this.setState({ color: newColor }); **
    when we use this.setState on DidUpdate we get an error  - 
    ERROR: 
        Maximum update depth exceeded.
        This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate.
        React limits the number of nested updates to prevent infinity loops.
    ENDERROR.
    Why does it make it to infinity loops? beacuse everytime we changed the state the componenet will be updated (rerender) which mean it will always will active the componentDidUpdate.
    */
  }

  render() {
    console.log("RENDER");
    return (
      <div>
        <h1 style={{ color: this.state.color ? this.state.color : "black" }}>
          {this.state.count}
        </h1>
        {/* binding function increment from the constructor */}
        <button onClick={this.increment}>Increment!</button>
        {/* binding function increment from the render itself */}
        <button onClick={this.increment.bind(this)}>Increment!</button>
      </div>
    );
  }
}

export default LifecycleMethodPart3;
