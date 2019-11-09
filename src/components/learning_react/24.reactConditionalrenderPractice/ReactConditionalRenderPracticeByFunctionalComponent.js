import React, { useState } from "react";

// this one is a functional component that use State Hook for showing if the user is logged in / out.

/*
Challenge:

Given a stateless functional component:
1. Follow the steps necessary to add state to it,
2. Have state keep track of whether the user is logged in or not
3. Add a button that logs the user in/out
    a. extra challenge - make the button display "log in" if they're not logged in and "log out" if they are
4. Display text that says "Logged in" if the user is logged in, or "Logged out" if they're not.
*/

function ReactConditionalRenderPracticeByFunctionalComponent() {
  // Declare a new state variable, which we'll call "userIsLoggendIn"
  const [userIsLoggendIn, setUserIsLoggendIn] = useState(false);
  console.log(userIsLoggendIn);
  return (
    <div>
      <button
        onClick={() => setUserIsLoggendIn(userIsLoggendIn ? false : true)}
      >
        {userIsLoggendIn ? "Log out" : "Log in"}
      </button>
      {userIsLoggendIn && <h2>The user is Logged in!</h2>}
    </div>
  );
}

export default ReactConditionalRenderPracticeByFunctionalComponent;
