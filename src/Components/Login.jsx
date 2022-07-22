import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState();
  const [error, setError] = useState(true);
  const navigate = useNavigate();

  const handlesubmit = () => {
    if(email.length ===0|| Password.length === 0){
      setError(false)
    } else{

    
    
    let splitpassword = Password.split("");

    let sumofsplitpassword = splitpassword.reduce((acc, curr) => +acc + +curr);
    console.log(sumofsplitpassword);
    if (
      sumofsplitpassword !== 10 ||
      !email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      setError(false);
    } else {
      navigate("/home");
      setEmail(true);
    }
    }
  };
  return (
    <div className="container">
      
      <div className="sub-container">
        <h1>Login Here</h1>
        <input
          type="email"
          className="input"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="input"
          placeholder="Enter Your Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {!error && <p className="error">please enter a valid email and password </p>}
        <button className="btn" onClick={handlesubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};
