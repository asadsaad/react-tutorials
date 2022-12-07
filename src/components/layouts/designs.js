import React from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import { BarChartOutlined, LockRounded } from "@mui/icons-material";
export default function Design() {
  return (
    <Container sx={{ background: { md: "#f8f8f8", xs: "red" } }}>
      <Typography variant="h1" sx={{ fontSize: { md: "22px", xs: "14px" } }}>
        My Design in Mui
      </Typography>
      <Typography variant="h2">My Design in Mui</Typography>
      <Typography variant="h3">My Design in Mui</Typography>
      <Typography variant="h4">My Design in Mui</Typography>
      <Button
        variant="contained"
        startIcon={<LockRounded />}
        sx={{ marginRight: "5px" }}
      >
        Click Me
      </Button>
      <Button variant="outlined" endIcon={<BarChartOutlined />}>
        Click Me
      </Button>
      <Grid container spacing={2} sx={{ p: 1 }}>
        <Grid item md={4} sm={12}>
          <Typography>My Grid</Typography>
        </Grid>
        <Grid item md={4} sm={12}>
          <Typography>My Grid</Typography>
        </Grid>
        <Grid item md={4} sm={12}>
          <Typography>My Grid</Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
