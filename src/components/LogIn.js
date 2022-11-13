import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import  {logIn}  from "../reducers/UserSlice";

/**import sign in  func */

const LogIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onLogIn = (evt) => {
        evt.preventDefault();
        dispatch(logIn({username, password}));
        console.log('current:', username);
        navigate("/home");
    };

    const onChange =(evt) => {
        if (evt.target.name === 'username'){
            setUsername(evt.target.value);
        }

        if(evt.target.name === 'password'){
            setPassword(evt.target.value);
        }
    };

    return (<>
        <div className="log-in">
            <form onSubmit={onLogIn}>
                <label>Username:</label>
                <input name='username' value={username} onChange={onChange}></input>

                <label>Password:</label>
                <input name='password' value={password} onChange={onChange}></input>
                {/* <Link to={'/home'}>
                
                </Link> */}
                <button>Log In</button>
                
              
                
                
            </form>
            {/* <form onSubmit={onSignUp}>
                <h3>Sign Up!</h3>
                <label>Username:</label>
                <input name='newUsername'></input>

                <label>Password:</label>
                <input name='newPassword'></input>

                <label>Address:</label>
                <input name='newAddress'></input>

                <label>Email:</label>
                <input name='newEmail'></input>

                <button>Register</button>
            </form> */}
        </div>
    </>)
};

export default LogIn;