import React, { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateName } from "./store/index";
function App() {
  const userList = useSelector((state) => state.users.value);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newName, setNewName] = useState("");
  console.log(userList);

  return (
    <>
      <div className="App">
        <div>
          <h1>Redux Crud</h1>

          <input
          type="text"
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Username..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
          <button
          onClick={() => {
            dispatch(
              addUser({
                id: userList[userList.length - 1].id + 1,
                name,
                username,
              })
            );
          }}
        >
          {" "}
          Add User
        </button>
        </div>
        {userList.map((item, i) => {
          return (
            <div key={i} className="card" >
              <h3>{item.name}</h3>
              <h3>{item.username}</h3>
              <input type="text" placeholder="name" onChange={(e)=>{setNewName(e.target.value)}} />
              <button onClick={()=>dispatch(updateName({id:item.id,name:newName}))} >updateName</button>
              <button onClick={()=>dispatch(deleteUser({id:item.id}))}>Delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
