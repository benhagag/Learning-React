import React from "react";
import "./TodoAppPhase2.css";

function TodoAppPhase2() {
  return (
    <div>
      <form>
        <p className="pClass">Honda</p>
        <input type="checkbox" name="honda" value="Car" />
        <p className="pClass">Subaru</p>
        <input type="checkbox" name="subaru" value="Car" />
        <p className="pClass">Mazda</p>
        <input type="checkbox" name="mazda" value="Car" />
      </form>
    </div>
  );
}

export default TodoAppPhase2;
