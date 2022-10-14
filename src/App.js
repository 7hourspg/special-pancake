import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({ type: "INC" });
  };
  const decrement = () => {
    dispatch({ type: "DEC" });
  };
  const AddBy = () => {
    dispatch({ type: "ADD", payload: 10 });
  };
  return (
    <>
      <div className="App">
        <div>App</div>
        <h1>{counter}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={AddBy}>Add value</button>
      </div>
    </>
  );
}

export default App;
