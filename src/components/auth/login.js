import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
export default function Login({ auth, setauth }) {
  const navigate = useNavigate();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();

  const handlelogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/user/login", {
        email,
        password,
      });
      localStorage.setItem("access_token", res?.data?.token);
      setauth({
        isAuthenticated: true,
        user: res?.data?.user,
        token: res?.data?.token,
      });
    } catch (error) {
      console.log(error?.response?.data);
    }
  };
  if (auth.isAuthenticated) {
    return navigate("/dashboard");
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handlelogin}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
