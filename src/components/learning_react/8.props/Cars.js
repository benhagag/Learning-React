import React from "react";

function Cars(props) {
  console.log(props);
  return (
    <div className="cars">
      <h1>CAR : </h1>
      <p>{props.car.color}</p>
      <p>{props.car.model}</p>
      <p>{props.car.type}</p>
    </div>
  );
}

export default Cars;
