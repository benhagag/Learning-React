import React from "react";

function JsxJavaScript() {
  const firstName = "Ben";
  const lastName = "Hagag";

  const date = new Date();

  const hour = date.getHours();
  const year = date.getFullYear();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const nowTime = `${hour}:${minutes}:${seconds}`;

  let timeDay;

  if (hour < 12) {
    timeDay = "morning";
  } else if (hour >= 12 && hour < 17) {
    timeDay = "afternoon";
  } else {
    timeDay = "night";
  }

  let myAge = year - 1992;

  return (
    <div>
      <h1>Hello World!</h1>
      <p>My name is {`${firstName} ${lastName}`} !</p>
      <p>
        It is currently about {hour % 12} o'clock at {timeDay}!
      </p>
      <p> acttualy it is{nowTime}</p>
      <p>My age is {myAge}</p>
    </div>
  );
}

export default JsxJavaScript;
