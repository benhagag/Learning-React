import React from "react";
import ContactCard from "./ContactCard";
import Cars from "./Cars";

function Props() {
  return (
    <div className="cotacts">
      {/* passing the varibels */}
      <ContactCard
        name="Mr.gala"
        imgUrl="http://placekitten.com/300/200"
        phone="(212) 555 1234"
        email="gala@gmail.com"
      />
      <ContactCard
        name="Mr.ben gala"
        imgUrl="http://placekitten.com/400/200"
        phone="(212) 666 1234"
        email="ben@gmail.com"
      />
      <ContactCard
        name="Mr.ben"
        imgUrl="http://placekitten.com/400/300"
        phone="(212) 78451 1234"
        email="benben@gmail.com"
      />
      <ContactCard
        name="Mr.lalala"
        imgUrl="http://placekitten.com/400/200"
        phone="(212) 14751 8974"
        email="lalala@gmail.com"
      />

      <h1>Class Car</h1>
      <Cars car={{ color: "red", model: 1999, type: "sedan" }} />
      <Cars car={{ color: "red", model: 2001, type: "sedan" }} />
      <Cars car={{ color: "red", model: 2003, type: "sedan" }} />
    </div>
  );
}
export default Props;
