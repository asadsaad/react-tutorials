import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
export default function Register({ auth, setauth }) {
  const navigate = useNavigate();
  const [username, setusername] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();

  const handleregister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/user/register", {
        username,
        email,
        password,
      });
      navigate("/login");
    } catch (error) {
      console.log(error?.response?.data);
    }
  };
  if (auth.isAuthenticated) {
    return navigate("/dashboard");
  }
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleregister}>
        <input
          type="text"
          placeholder="Enter User Name"
          onChange={(e) => setusername(e.target.value)}
          value={username}
        />
        <input
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setemail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setpassword(e.target.value)}
          value={password}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
