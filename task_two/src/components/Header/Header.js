"use client"
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color={`primary`}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Link href={"/"} passHref>
            <Typography variant="h6" component="div">
              Logo
            </Typography>
          </Link>

          <Link href="/products" passHref>
            <Typography
              variant="button"
              component="a"
              color="inherit"
              style={{
                cursor: "pointer",
              }}
            >
              Post
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};


export default Header;

