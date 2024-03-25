import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const CustomPagination = ({ count, onChange, page }) => {
  return (
    <Stack spacing={2}>
      <Pagination
        count={count}
        variant="outlined"
        shape="rounded"
        page={page}
        onChange={onChange}
      />
    </Stack>
  );
};
export default CustomPagination;
