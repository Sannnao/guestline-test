import { useQuery } from "@tanstack/react-query";
import { getHotels } from "api";
import { HotelItem } from "components/HotelItem";
import { Box } from "@mui/material";

type HotelsListProps = {};

export const HotelsList = ({}: HotelsListProps) => {
  const { isLoading, data } = useQuery({
    queryKey: ["hotels"],
    queryFn: getHotels,
  });

  return isLoading ? (
    <div>loading</div>
  ) : (
    <Box>
      {data!.map((hotel, i) => (
        <HotelItem key={i} hotel={hotel} />
      ))}
    </Box>
  );
};
