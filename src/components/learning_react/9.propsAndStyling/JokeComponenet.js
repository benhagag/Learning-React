import React from "react";
import "./JokeComponenet.css";

function JoKeComponent(props) {
  console.log(props);
  return (
    <div
      className="joke"
      style={{ backgroundColor: !props.question && "purple" }}
    >
      <div style={{ display: props.question ? "block" : "none" }}>
        <h2>Question: </h2>
        <p>{props.question}</p>
      </div>
      <h2>Answer</h2>
      <p>{props.answer}</p>
    </div>
  );
}
export default JoKeComponent;
