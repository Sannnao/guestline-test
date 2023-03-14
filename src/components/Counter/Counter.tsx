import { useState, useEffect } from "react";
import Box from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

type CounterProps = {
  getAmount: React.Dispatch<React.SetStateAction<number>>;
};

export const Counter = ({ getAmount }: CounterProps) => {
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    getAmount(amount);
  }, [amount, getAmount]);

  const increment = () => {
    setAmount((prev) => ++prev);
  };

  const decrement = () => {
    setAmount((prev) => {
      if (prev > 0) {
        return prev - 1;
      }

      return prev;
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <IconButton aria-label="remove product" onClick={decrement}>
        <RemoveIcon />
      </IconButton>
      <Typography data-testid="productAmount" variant="h6">
        {amount}
      </Typography>
      <IconButton aria-label="add product" onClick={increment}>
        <AddIcon />
      </IconButton>
    </Box>
  );
};
