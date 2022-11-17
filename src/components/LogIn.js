import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logIn, signUp, currentUser } from "../reducers/UserSlice";

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogIn = (evt) => {
    evt.preventDefault();
    dispatch(logIn({ username, password }));

    navigate("/home");
  };

  const onSignUp = (evt) => {
    evt.preventDefault();
    dispatch(signUp({ username, password, address, email }));
    dispatch(logIn({ username, password }));
    navigate("/home");
  };

  const onChange = (evt) => {
    console.log("CHANGED");
    if (evt.target.name === "username") {
      setUsername(evt.target.value);
    }

    if (evt.target.name === "password") {
      setPassword(evt.target.value);
    }
    if (evt.target.name === "address") {
      setAddress(evt.target.value);
    }
    if (evt.target.name === "email") {
      setEmail(evt.target.value);
    }
  };

  return (
    <>
      <div>
        <div className="log-in">
          <form onSubmit={onLogIn}>
            <label>Username:</label>
            <input name="username" value={username} onChange={onChange}></input>

            <label>Password:</label>
            <input name="password" value={password} onChange={onChange}></input>

            <button type="submit">Log In</button>
            {/* <button onClick={showSignUp}>Create Account</button> */}
          </form>
        </div>
        <div className="sign-up">
          <form onSubmit={onSignUp}>
            <h3>Sign Up!</h3>
            <label>Username:</label>
            <input name="username" value={username} onChange={onChange}></input>

            <label>Password:</label>
            <input name="password" value={password} onChange={onChange}></input>

            <label>Address:</label>
            <input name="address" value={address} onChange={onChange}></input>

            <label>Email:</label>
            <input name="email" value={email} onChange={onChange}></input>

            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LogIn;
