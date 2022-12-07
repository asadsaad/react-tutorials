import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import TopNav from "../header";
import {
  Alert,
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { LocalFireDepartment, Person, Send } from "@mui/icons-material";
export default function Login({ auth, setauth }) {
  const navigate = useNavigate();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [errors, seterrors] = useState();

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
      seterrors(error?.response?.data.message);
    }
  };
  if (auth.isAuthenticated) {
    return navigate("/dashboard");
  }
  return (
    <div>
      <TopNav auth={auth} setauth={setauth} />

      <Container maxWidth="md">
        {errors && <Alert severity="error">{errors && errors}</Alert>}

        <Typography
          sx={{
            fontWeight: "bold",
            mb: 1,
            mt: 1,
            fontSize: "22px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <LocalFireDepartment />
          <Box>Welcome Back</Box>
        </Typography>
        <form onSubmit={handlelogin}>
          <TextField
            type="email"
            placeholder="JohnDoe@gmail.com"
            onChange={(e) => setemail(e.target.value)}
            value={email}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            size="small"
            sx={{ mb: 1 }}
            fullWidth
          />
          <TextField
            type="password"
            placeholder="*******"
            onChange={(e) => setpassword(e.target.value)}
            value={password}
            id="outlined-basic"
            label="Password"
            variant="outlined"
            size="small"
            sx={{ mb: 1 }}
            fullWidth
          />
          <Button type="submit" variant="contained" endIcon={<Send />}>
            Login
          </Button>
        </form>
      </Container>
    </div>
  );
}
