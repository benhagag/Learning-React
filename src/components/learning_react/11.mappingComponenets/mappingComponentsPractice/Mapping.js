import React from "react";
import productsAPI from "./productsAPI";
import PracticeMapping from "./PracticeMapping";

function Mapping() {
  const products = productsAPI.map(product => (
    <PracticeMapping key={product.id} item={product} />
  ));

  return products;
}

export default Mapping;
