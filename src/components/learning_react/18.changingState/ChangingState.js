import React from "react";

class ChangingState extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  changeState() {
    let count = this.state.count;
    this.setState({ count: count + 1 });
  }

  restartState() {
    this.setState({ count: 0 });
  }

  plusHundered() {
    this.setState(prevState => {
      return {
        count: prevState.count + 100
      };
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button count={this.state.count} onClick={() => this.changeState()}>
          Change State +1 !
        </button>
        <button count={this.state.count} onClick={() => this.plusHundered()}>
          Change State +100!
        </button>
        <button onClick={() => this.restartState()}> Restart State </button>
      </div>
    );
  }
}

export default ChangingState;
