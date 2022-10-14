import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {actions} from './store/index'
function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(actions.increment());
  };
  const decrement = () => {
    dispatch(actions.decrement());
  };
  const AddBy = () => {
    dispatch(actions.addby(10));
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
