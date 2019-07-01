import React from "react";

function JoKeComponentData(props) {
  console.log(props);
  return (
    <div>
      <p>
        {props.question
          ? `Question number :${props.id}`
          : `this one has only an answer ${props.id}!`}
      </p>
      <p>{props.question ? props.question : ""}</p>
      <p>{props.answer}</p>
    </div>
  );
}

export default JoKeComponentData;
