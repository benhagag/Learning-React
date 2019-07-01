import React from "react";

function PracticeMapping(props) {
  return (
    <div>
      <h2>Product ID : {props.item.id}</h2>
      <h2>Product Name : {props.item.name}</h2>
      <p>
        {props.item.price.toLocaleString("en-us", {
          style: "currency",
          currency: "USD"
        })}
        - {props.item.description}
      </p>
    </div>
  );
}

export default PracticeMapping;
