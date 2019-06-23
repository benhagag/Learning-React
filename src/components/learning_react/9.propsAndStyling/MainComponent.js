import React from "react";
import JoKeComponent from "./JokeComponenet";

function MainComponenet() {
  return (
    <div style={{ marginBottom: "600px" }}>
      <JoKeComponent
        question="What is my first name ?"
        answer="My first name is Ben"
      />
      <JoKeComponent
        question="What is my last name ?"
        answer="My last name is Hagag"
      />
      <JoKeComponent question="Where do i live ?" answer="I live in Porat" />
      <JoKeComponent
        question="What is my dog's name ?"
        answer="His name is Sendy"
      />
      <JoKeComponent answer="Hello World ? LOL :)" />
    </div>
  );
}

export default MainComponenet;
