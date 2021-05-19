import React, { useEffect, useState } from "react";
import "../styles/App.css";

const App = () => {
  let [count, setCount] = useState(0);
  let dClick = useEffect(() => {
    alert("cant edit it");
  });
  let sCount = () => {
    setCount(count + 1);
  };
  // let dClick = () => {
  //   alert("cant edit it");
  // };
  return (
    <div className="ball">
      <h1 className="count">{count}</h1>
      <button
        className="increment-button"
        onClick={sCount}
        onDoubleClick={dClick}
      >
        increment
      </button>
    </div>
  );
};

export default App;
