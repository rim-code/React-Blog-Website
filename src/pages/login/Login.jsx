import axios from "axios";
import "./login.css";
import { Link } from "react-router-dom";
import { useContext, useRef } from 'react';
import { Context } from "../../context/Context"

export default function Login() {

  const userRef = useRef();
  const passwordRef = useRef();

  const {dispatch, isFetching } = useContext(Context)

  const handleSubmit = async (e) => {
    e.preventDefault();
    //when I click button it'is going to call login start action
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      })
      dispatch({ type: "LOGIN_SUCCESS" , payload: res.data }); //But you can use actions =>   dispatch(LoginSuccess(res.data))

    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  //  console.log(user);
  // console.log(isFetching);
  
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input className="loginInput" type="text" placeholder="Enter your username..." ref={userRef} />
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..." ref={passwordRef} />
        <button className="loginButton" type="submit"  disabled={isFetching} >Login</button>
      </form>
      <button className="loginRegisterButton">
        <Link to="/register" style={{ textDecoration: "none", color: "inherit" }}>Register</Link>
      </button>
    </div>
  );
}