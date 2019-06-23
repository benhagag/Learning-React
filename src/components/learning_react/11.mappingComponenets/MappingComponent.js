import React from "react";
import JoKeComponentData from "./JokeComponentData";
import mappingData from "./mappingData";

function MappingComponent() {
  // const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // // The map method will create in doubled as new array with each number * 2 !
  // const doubled = nums.map(function(num) {
  //   return num * 2;
  // });
  // console.log(nums);
  // console.log(doubled);

  const jokesComponenet = mappingData.map(map => (
    <JoKeComponentData
      question="What is my first name ?"
      answer="My first name is Ben"
    />
  ));

  return <div> {jokesComponenet} </div>;
}

export default MappingComponent;
