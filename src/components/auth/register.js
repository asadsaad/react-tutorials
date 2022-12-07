import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import TopNav from "../header";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import { LocalFireDepartment, Person } from "@mui/icons-material";
export default function Register({ auth, setauth }) {
  const navigate = useNavigate();
  const [username, setusername] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [errors, seterrors] = useState();

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
      seterrors(error?.response?.data?.message);
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
          <Box>Create Your Account</Box>
        </Typography>
        <form onSubmit={handleregister}>
          <TextField
            type="text"
            placeholder="(e.g) Jon Doe"
            onChange={(e) => setusername(e.target.value)}
            value={username}
            id="outlined-basic"
            label="User Name"
            variant="outlined"
            size="small"
            sx={{ mb: 1 }}
            fullWidth
          />
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
          <Button type="submit" variant="contained" endIcon={<Person />}>
            Register
          </Button>
        </form>
      </Container>
    </div>
  );
}
