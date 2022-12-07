import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
const NotLoginHeader = () => {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: "20px" }}>
      <AppBar
        position="static"
        sx={{
          background: "white",
          padding: { md: "0px 80px", xs: "0px 8px" },
          boxShadow: "0",
          borderBottom: "1px solid #E2E8F0",
          zIndex: "9 !important",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Link
              to="/"
              className="inline-block w-full max-w-130"
              style={{ textDecoration: "none" }}
            >
              <Typography sx={{ fontWeight: "bold", color: "#25a2a0" }}>
                Buy Now
              </Typography>
            </Link>
          </Box>
          <Box>
            <Link to="/login">
              <Button
                variant="outlined"
                // size={{xs:"small"}}
                sx={{
                  color: "#25A2A0",
                  border: "1px solid #25A2A0",
                  borderRadius: "8px",
                  fontWeight: "700",
                  padding: { md: "6px 30px", xs: "3px 18px" },
                  textTransform: "capitalize",
                }}
              >
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button
                variant="contained"
                // size={{xs:"small"}}

                sx={{
                  ml: { md: 2, xs: 0.5 },
                  background: "#25A2A0",
                  border: "1px solid #25A2A0",
                  borderRadius: "8px",
                  fontWeight: "700",
                  padding: { md: "6px 30px", xs: "3px 18px" },

                  boxShadow: "0",
                  textTransform: "capitalize",
                  "&:hover": { background: "#25A2A0", boxShadow: "0" },
                }}
              >
                Register
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default NotLoginHeader;
