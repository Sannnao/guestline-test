import { useState, useEffect } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { FilterItemData } from "components/Filter";

type CounterProps = {
  getAmount: React.Dispatch<React.SetStateAction<FilterItemData>>;
};

export const Counter = ({ getAmount }: CounterProps) => {
  const [amount, setAmount] = useState<FilterItemData>(null);

  useEffect(() => {
    getAmount(amount);
  }, [amount, getAmount]);

  const increment = () => {
    setAmount((prev) => {
      if (prev !== null) {
        return ++prev;
      }

      return 0;
    });
  };

  const decrement = () => {
    setAmount((prev) => {
      if (prev === null) {
        return prev;
      }

      if (prev > 0) {
        return prev - 1;
      }

      if (prev === 0) {
        return null;
      }

      return prev;
    });
  };

  return (
    <Box
      data-testid="counter"
      sx={{
        display: "flex",
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <IconButton aria-label="decrement" onClick={decrement}>
        <RemoveIcon />
      </IconButton>
      <Typography data-testid="amount" variant="h6">
        {amount === null ? "_" : amount}
      </Typography>
      <IconButton aria-label="increment" onClick={increment}>
        <AddIcon />
      </IconButton>
    </Box>
  );
};
