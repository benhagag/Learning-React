import React from "react";

function JoKeComponentData(props) {
  console.log(props);
  return (
    <div>
      <p>{`Question number :${props.id}`}</p>
      <p>{props.question}</p>
      <p>{props.answer}</p>
    </div>
  );
}

export default JoKeComponentData;
