import { useState, useEffect } from "react";
import { Box, Card, Rating, Typography } from "@mui/material";
import { Counter } from "components/Counter";

export type FilterItemData = number | null;

export type FilterData = {
  rating: FilterItemData;
  adults: FilterItemData;
  children: FilterItemData;
};

type FilterProps = {
  getFilterData: React.Dispatch<React.SetStateAction<FilterData>>;
};

export const Filter = ({ getFilterData }: FilterProps) => {
  const [rating, setRating] = useState<FilterItemData>(null);
  const [adultsFilterAmount, setAdultsFilterAmount] =
    useState<FilterItemData>(null);
  const [childrenFilterAmount, setChildrenFilterAmount] =
    useState<FilterItemData>(null);

  useEffect(() => {
    getFilterData({
      rating,
      adults: adultsFilterAmount,
      children: childrenFilterAmount,
    });
  }, [adultsFilterAmount, childrenFilterAmount, rating, getFilterData]);

  return (
    <Card
      data-testid="filter"
      sx={{
        display: "flex",
        alignItems: "center",
        columnGap: "15px",
        padding: "10px 15px",
        backgroundColor: "white",
      }}
    >
      <Rating
        data-testid="rating"
        value={rating}
        onChange={(_e, newValue) => setRating(newValue)}
      />
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
