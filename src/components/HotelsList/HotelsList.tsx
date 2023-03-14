import { useHotelsQuery } from "api/useHotelsQuery";
import { HotelItem } from "components/HotelItem";
import { Box } from "@mui/material";

type HotelsListProps = {};

export const HotelsList = ({}: HotelsListProps) => {
  const { isLoading, data } = useHotelsQuery();

  return isLoading ? (
    <div>loading</div>
  ) : (
    <Box width="65%">
      {data!.map((hotel, i) => (
        <HotelItem key={i} hotel={hotel} />
      ))}
    </Box>
  );
};
