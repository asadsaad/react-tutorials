import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import {
  Avatar,
  CircularProgress,
  Container,
  Paper,
  Typography,
} from "@mui/material";
export default function Editprodct({
  open,
  setOpen,
  currentproduct,
  products,
  setproduct,
}) {
  const [productTitle, setproducttitle] = React.useState();
  const [productDescription, setproductdescription] = React.useState();
  const [catagery, setcatagery] = React.useState();
  const [brand, setbrand] = React.useState();
  const [price, setprice] = React.useState();
  const [instock, setstock] = React.useState();

  const [images, setimages] = React.useState();

  React.useEffect(() => {
    if (currentproduct) {
      setproducttitle(currentproduct?.productTitle);
      setproductdescription(currentproduct?.productDescription);
      setcatagery(currentproduct?.catagery);
      setbrand(currentproduct?.brand);
      setimages(currentproduct?.images[0]);
      setprice(currentproduct?.price);
      setstock(currentproduct?.instock);
    }
  }, [currentproduct]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleedit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:5000/product/update-product/${currentproduct._id}`,
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
      const updatedproducts = products.map((product) =>
        product._id == currentproduct._id ? res.data.data : product
      );
      setproduct(updatedproducts);

      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit</DialogTitle>
        <Paper sx={{ p: 2 }}>
          <form onSubmit={handleedit}>
            <TextField
              label="Product Name"
              fullWidth
              size="small"
              sx={{ mb: 0.5 }}
              onChange={(e) => setproducttitle(e.target.value)}
              value={productTitle}
            />
            <TextField
              label="Product Description"
              fullWidth
              size="small"
              sx={{ mb: 0.5 }}
              onChange={(e) => setproductdescription(e.target.value)}
              value={productDescription}
            />
            <TextField
              label="Catagery"
              fullWidth
              size="small"
              sx={{ mb: 0.5 }}
              value={catagery}
              onChange={(e) => setcatagery(e.target.value)}
            />
            <TextField
              label="Brand"
              fullWidth
              size="small"
              value={brand}
              sx={{ mb: 0.5 }}
              onChange={(e) => setbrand(e.target.value)}
            />
            <TextField
              label="Price"
              fullWidth
              size="small"
              value={price}
              sx={{ mb: 0.5 }}
              onChange={(e) => setprice(e.target.value)}
            />
            <TextField
              label="Available Stock"
              fullWidth
              size="small"
              sx={{ mb: 0.5 }}
              onChange={(e) => setstock(e.target.value)}
              value={instock}
            />
            <TextField
              label="Images"
              fullWidth
              size="small"
              value={images}
              sx={{ mb: 0.5 }}
              onChange={(e) => setimages(e.target.value)}
            />
            <Button variant="contained" type="submit">
              Add Product
            </Button>
          </form>
        </Paper>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
