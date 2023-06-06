import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

interface RatingProps {
  value: number;
}
const BasicRating: React.FC<RatingProps> = ({ value }) => {
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Rating name="read-only" value={value} readOnly color="primary" />
    </Box>
  );
};

export default BasicRating;
