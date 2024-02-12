import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  // Life cycle events
  useEffect(() => {
    console.log("Component mounted");

    return () => {
      console.log("Component unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("State changed:", count);
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default App;
