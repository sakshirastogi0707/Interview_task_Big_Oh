import React from "react";
import { Container, Grid } from "@mui/material";
import ProductCard from "./ProductCard/ProductCard";

const ProductListingUI = ({products}) => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        {products?.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductListingUI;
