import React from "react";

function ContactCard(props) {
  console.log(props);

  // output:
  //   {
  //     email: "ben@gmail.com",
  //     imgUrl: "http://placekitten.com/300/200",
  //     name: "Mr.gala",
  //     phone: "(212) 555 1234"
  //   }

  return (
    <div className="contact-card">
      <img src={props.imgUrl} />
      <h3>{props.name}</h3>
      <p>{props.phone}</p>
      <p>{props.email}</p>
    </div>
  );
}

export default ContactCard;
