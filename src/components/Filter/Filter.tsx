import { useState } from "react";
import { Box, Card, Rating, Typography } from "@mui/material";
import { Counter } from "components/Counter";

export const Filter = () => {
  const [rating, setRating] = useState(0);
  const [adultsFilterAmount, setAdultsFilterAmount] = useState(0);
  const [childrenFilterAmount, setChildrenFilterAmount] = useState(0);

  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        columnGap: "15px",
        padding: "10px 15px",
        backgroundColor: "white",
      }}
    >
      <Rating />
      <Box display="flex" alignItems="center">
        <Typography variant="body2">Adults:</Typography>
        <Counter getAmount={setAdultsFilterAmount} />
      </Box>
      <Box display="flex" alignItems="center">
        <Typography variant="body2">Children:</Typography>
        <Counter getAmount={setChildrenFilterAmount} />
      </Box>
    </Card>
  );
};
