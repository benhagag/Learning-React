import React from "react";
import JoKeComponentData from "./JokeComponentData";
import mappingData from "./mappingData"; // LIKE API
import Mapping from "./mappingComponentsPractice/Mapping";

function MappingComponent() {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // The map method will create in doubled as new array with each number * 2 !
  const doubled = nums.map(function(num) {
    return num * 2;
  });
  console.log(nums); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log(doubled); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

  // The map method will create in triple as new array with each number * 3 !
  const triple = nums.map(num => num * 3); // [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]
  console.log(triple);

  // =========================================================================================================
  console.log(mappingData);

  // filter all those who does not have question !
  let mappingDataFilterd = mappingData.filter(map => map.question);

  const jokesComponenet = mappingDataFilterd.map(map => (
    <JoKeComponentData
      key={map.id}
      id={map.id}
      question={map.question}
      answer={map.punchLine}
    />
  ));

  console.log(jokesComponenet);

  return (
    <div>
      {jokesComponenet}
      <div>
        <h1> Practice Mapping component ! </h1>
        <Mapping />
      </div>
    </div>
  );
}

export default MappingComponent;
