import React from "react";

class Class extends React.Component {
  myMethod() {
    return <p>How are you ?</p>;
  }
  render() {
    const date = new Date();
    const dateString = date.toString();

    const style = this.myMethod();

    console.log(date);

    return (
      <div>
        <h1>This is a class Componenet! </h1>
        <p>{dateString}</p>
        {style}
      </div>
    );
  }
}

export default Class;
