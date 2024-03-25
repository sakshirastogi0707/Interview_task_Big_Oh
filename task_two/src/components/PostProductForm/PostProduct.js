"use client";
import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { ProductService } from "@/services/api/product.service";
import { toast } from "react-toastify";
import  { useRouter } from 'next/navigation'

const PostProduct = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newPost = {
      userId: 10,
      title: title,
      id: 1,
      body: body,
      tags: tags.split(",").map((tag) => tag.trim()),
    };
    const response = await ProductService.postProduct(newPost);
    if (response) {
      toast.success("The product has been posted successfully!");
      router.push("/")
    } else {
      toast.error("Failed to post the product");
    }

    setTitle("");
    setBody("");
    setTags("");
  };

  return (
    <Box maxWidth={600} mx="auto" mt={4} p={2} boxShadow={2} borderRadius={4}>
      <Typography variant="h5" gutterBottom>
        Create a New Post
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          fullWidth
          variant="outlined"
          margin="normal"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />
        <TextField
          label="Body"
          fullWidth
          variant="outlined"
          margin="normal"
          multiline
          rows={4}
          value={body}
          onChange={(event) => setBody(event.target.value)}
          required
        />
        <TextField
          label="Tags (comma-separated)"
          fullWidth
          variant="outlined"
          margin="normal"
          value={tags}
          onChange={(event) => setTags(event.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Create Post
        </Button>
      </form>
    </Box>
  );
};

export default PostProduct;
