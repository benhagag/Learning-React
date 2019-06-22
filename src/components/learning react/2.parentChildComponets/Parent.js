import React from "react";
import Child from "./Child";

function Parent() {
  return (
    <div>
      <nav>
        <h1>Hello World</h1>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </nav>
      <main>
        <p> This is content ...export....</p>
      </main>
      <Child />
    </div>
  );
}

export default Parent;
