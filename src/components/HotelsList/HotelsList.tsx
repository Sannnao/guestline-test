import { useMemo } from "react";
import { useHotelsQuery } from "api/useHotelsQuery";
import { HotelItem } from "components/HotelItem";
import { Box } from "@mui/material";
import { FilterData } from "components/Filter";

type HotelsListProps = {
  filterData: FilterData;
};

export const HotelsList = ({ filterData }: HotelsListProps) => {
  const { isLoading, data } = useHotelsQuery();
  const rating = filterData.rating;
  const shouldFilter = rating !== null;

  const filteredHotels = useMemo(() => {
    return shouldFilter
      ? data
          ?.filter((hotel) => {
            return +hotel.starRating >= rating;
          })
          .sort((a, b) => {
            if (+a.starRating > +b.starRating) {
              return 1;
            } else if (+a.starRating < +b.starRating) {
              return -1;
            } else {
              return 0;
            }
          })
      : data;
  }, [data, rating, shouldFilter]);

  return isLoading ? (
    <div>loading</div>
  ) : (
    <Box width="65%">
      {filteredHotels?.map((hotel, i) => (
        <HotelItem key={i} hotel={hotel} filterData={filterData} />
      ))}
    </Box>
  );
};
