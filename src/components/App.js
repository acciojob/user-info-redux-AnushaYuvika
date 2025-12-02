
import React from "react";
import './../styles/App.css';
import { useSelector, useDispatch } from "react-redux";
import { setName, setEmail } from "../redux/userSlice";


const App = () => {
  const dispatch = useDispatch();
  const { name, email } = useSelector(state => state.user);

  return (
    <div className="page">
      <h1>User Information</h1>

      <div className="form">
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={e => dispatch(setName(e.target.value))}
        /> <br/> <br/>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={e => dispatch(setEmail(e.target.value))}
        />
      </div>

      <div className="output">
        <p>Current values in store:</p>
        <p>Name - {name}</p>
        <p>Email - {email}</p>
      </div>
    </div>
  )
}

export default App
