import React from "react";
import { Chip } from "@mui/material";

const TagChip = ({ label }) => {
  return <Chip label={label} style={{ marginRight: 4, marginBottom: 4 }} />;
};

export default TagChip;
