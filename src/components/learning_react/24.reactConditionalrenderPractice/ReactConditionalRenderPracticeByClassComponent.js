import React from "react";

// this one is a class component that use State for tracking if the user is logged in / out.

class ReactConditionalRenderPracticeByClassComponent extends React.Component {
  constructor() {
    super();
    this.state = { userIsLoggedIn: false };
  }

  // it will return the opposite of prevState.userIsLoggeIn, Som if it is true it will return false and if it is false it will return true.
  userLogIn() {
    this.setState(prevState => {
      return {
        userIsLoggedIn: !prevState.userIsLoggedIn
      };
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.userLogIn.bind(this)}>
          {this.state.userIsLoggedIn ? "Log out" : "Log in"}
        </button>
        {/*  it will represnt text "user log in" only if the user is log in otherwise it will not be displayed! */}
        {this.state.userIsLoggedIn && <h2>The user is Logged in!!</h2>}
      </div>
    );
  }
}

export default ReactConditionalRenderPracticeByClassComponent;
