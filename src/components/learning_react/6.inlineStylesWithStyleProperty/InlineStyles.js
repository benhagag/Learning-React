import React from "react";

function InlineStyles() {
  const styleDayTime = {
    color: "yellow"
  };

  const styles = {
    color: "green",
    backgroundColor: "gray",
    fontSize: 32
  };

  const date = new Date();
  const hour = date.getHours();

  if (hour < 12) {
    styleDayTime.color = "yellow";
  } else if (hour >= 12 && hour < 17) {
    styleDayTime.color = "green";
  } else {
    styleDayTime.color = "blue";
  }
  return (
    <div>
      <h1 style={{ color: "blue", backgroundColor: "yellow" }}>
        THis is inline style in color blue
      </h1>
      <h2 style={styles}>This is inline styles with varible</h2>
      <h3 style={styleDayTime}>
        This is inline styles which is dynamic and depended in time of day
      </h3>
    </div>
  );
}

export default InlineStyles;
