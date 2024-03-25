import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import TagChip from "../../common/TagChip/TagChip";

const ProductCard = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 400, marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.body}
        </Typography>
        <Typography variant="caption" color="text.secondary" gutterBottom>
          Tags:
        </Typography>
        {product.tags.map((tag) => (
          <TagChip key={tag} label={tag} />
        ))}
      </CardContent>
      <CardActions>
        <Button size="small">Reactions: {product.reactions}</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
