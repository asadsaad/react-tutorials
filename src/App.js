import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Dashboard from "./components/dashboard/dashboard";
import setauthheader from "./setheadertoken";

if (localStorage.access_token) {
  setauthheader(localStorage.access_token);
}

function App() {
  const [auth, setauth] = useState({
    isAuthenticated: false,
    user: null,
    token: localStorage.getItem("access_token"),
  });

  const loaduser = async () => {
    if (localStorage.access_token) {
      setauthheader(localStorage.access_token);
    }
    try {
      const res = await axios.get("http://localhost:5000/user");
      setauth({
        isAuthenticated: true,
        user: res?.data?.data,
        token: res?.data?.token,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loaduser();
  }, []);

  console.log(auth);
  // const [auth, setauth] = useState({
  //   isAuthenticated: false,
  //   user: null,
  //   token: localStorage.getItem("access_token"),
  // });
  // const [loading, setloading] = useState(false);
  // const loaduser = async () => {
  //   setloading(true);
  //   if (localStorage.access_token) {
  //     setauthtoken(localStorage.access_token);
  //   }
  //   try {
  //     const res = await axios.get("http://localhost:5000/user");
  //     setauth({
  //       isAuthenticated: true,
  //       user: res?.data?.data,
  //     });
  //     setloading(false);
  //   } catch (error) {
  //     console.log(error);
  //     setloading(false);
  //   }
  // };
  // useEffect(() => {
  //   loaduser();
  // }, []);
  // if (loading) {
  //   return "Loding";
  // }
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/login"
            element={<Login auth={auth} setauth={setauth} />}
          />
          <Route
            path="/register"
            element={<Register auth={auth} setauth={setauth} />}
          />
          <Route
            path="/dashboard"
            element={<Dashboard auth={auth} setauth={setauth} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
