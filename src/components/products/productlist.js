import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Avatar,
  CircularProgress,
  Container,
  Paper,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import TopNav from "../header";
import { Delete, Edit } from "@mui/icons-material";
import Editprodct from "./editproduct";
export default function ProductList({ auth, setauth }) {
  const [open, setOpen] = React.useState(false);

  const [product, setproduct] = useState();
  const [productTitle, setproducttitle] = useState();
  const [productDescription, setproductdescription] = useState();
  const [catagery, setcatagery] = useState();
  const [brand, setbrand] = useState();
  const [price, setprice] = useState();
  const [instock, setstock] = useState();

  const [images, setimages] = useState();

  const [loadingp, setloadingp] = useState(false);
  const loadproduct = async () => {
    try {
      setloadingp(true);
      const res = await axios.get("http://localhost:5000/product");
      setproduct(res?.data?.data);
      setloadingp(false);
    } catch (error) {
      console.log(error?.response?.data);
      setloadingp(false);
    }
  };
  useEffect(() => {
    loadproduct();
  }, []);

  const handleadd = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/product/add-product",
        {
          productTitle,
          productDescription,
          catagery,
          brand,
          price,
          images,
          instock,
        }
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handledelete = async (e, id) => {
    try {
      const res = await axios.delete(
        `http://localhost:5000/product/delete-product/${id}`
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  if (loadingp) {
    return <CircularProgress />;
  }
  return (
    <>
      <TopNav auth={auth} setauth={setauth} />
      <Container maxWidth="lg" sx={{ mt: 2 }}>
        <Typography>Products List</Typography>
        <Paper sx={{ p: 2 }}>
          <form onSubmit={handleadd}>
            <TextField
              label="Product Name"
              fullWidth
              size="small"
              sx={{ mb: 0.5 }}
              onChange={(e) => setproducttitle(e.target.value)}
            />
            <TextField
              label="Product Description"
              fullWidth
              size="small"
              sx={{ mb: 0.5 }}
              onChange={(e) => setproductdescription(e.target.value)}
            />
            <TextField
              label="Catagery"
              fullWidth
              size="small"
              sx={{ mb: 0.5 }}
              onChange={(e) => setcatagery(e.target.value)}
            />
            <TextField
              label="Brand"
              fullWidth
              size="small"
              sx={{ mb: 0.5 }}
              onChange={(e) => setbrand(e.target.value)}
            />
            <TextField
              label="Price"
              fullWidth
              size="small"
              sx={{ mb: 0.5 }}
              onChange={(e) => setprice(e.target.value)}
            />
            <TextField
              label="Available Stock"
              fullWidth
              size="small"
              sx={{ mb: 0.5 }}
              onChange={(e) => setstock(e.target.value)}
            />
            <TextField
              label="Images"
              fullWidth
              size="small"
              sx={{ mb: 0.5 }}
              onChange={(e) => setimages(e.target.value)}
            />
            <Button variant="contained" type="submit">
              Add Product
            </Button>
          </form>
        </Paper>
        {product &&
          product.map((p) => (
            <Paper sx={{ p: 2, mt: 2 }}>
              <Typography>{p.productTitle}</Typography>
              <Typography>{p.productDescription}</Typography>
              <Typography>{p.catagery}</Typography>
              <Typography>{p.brand}</Typography>
              <Typography>{p.price}</Typography>
              <Avatar src={p.images[0]} variant="rounded" />
              <Button
                onClick={(e) => handledelete(e, p._id)}
                variant="contained"
                endIcon={<Delete />}
                sx={{ mr: 1, mt: 1 }}
              >
                Delete
              </Button>
              <Button
                variant="contained"
                endIcon={<Edit />}
                sx={{ mt: 1 }}
                onClick={() => setOpen(true)}
              >
                Edit
              </Button>
            </Paper>
          ))}
      </Container>
      <Editprodct open={open} setOpen={setOpen} />
    </>
  );
}
