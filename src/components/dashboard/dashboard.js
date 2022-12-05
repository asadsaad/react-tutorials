import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router";
export default function Dashboard({ auth, setauth }) {
  const navigate = useNavigate();

  useEffect(() => {
    const { isAuthenticated } = auth;
    if (!isAuthenticated) {
      return navigate("/login");
    }
  }, []);
  // useEffect(() => {
  //   setloading(true);
  //   const token = localStorage.getItem("access_token");
  //   console.log(token);
  //   const option = {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       x_auth: token,
  //     },
  //   };
  //   fetch("http://localhost:5000/user", option)
  //     .then((user) => user.json())
  //     .then((data) => setuser(data?.data))
  //     .finally(() => setloading(false));
  // }, []);

  return (
    <div>
      <h3>{auth?.user?.email}</h3>
      <h3>{auth?.user?.username}</h3>
      <h3>{auth?.user?.role}</h3>
    </div>
  );
}
