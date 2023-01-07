import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Auth from "./components/auth/auth";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Dashboard from "./components/dashboard/dashboard";
import Design from "./components/layouts/designs";
import ProductList from "./components/products/productlist";
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
  const [loading, setloading] = useState(false);

  const loaduser = async () => {
    if (localStorage.access_token) {
      setauthheader(localStorage.access_token);
    }
    try {
      setloading(true);
      const res = await axios.get("http://localhost:5000/user");
      setauth({
        isAuthenticated: true,
        user: res?.data?.data,
        token: res?.data?.token,
      });
      setloading(false);
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  };
  useEffect(() => {
    loaduser();
  }, []);

  if (loading) {
    return "Loding";
  }
  return (
    <BrowserRouter>
      <div className="App">
        <Auth />
        {/* <Routes>
          <Route
            path="/"
            element={<ProductList auth={auth} setauth={setauth} />}
          />
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
        </Routes> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
