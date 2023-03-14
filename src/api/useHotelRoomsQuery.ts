import { useQuery } from "@tanstack/react-query";
import { getHotelRooms } from "api";

export const getHotelRoomsQueryConfig = (hotelId: string) => {
  return {
    queryKey: ["hotelRooms", hotelId],
    queryFn: () => getHotelRooms(hotelId),
    staleTime: 10 * 1000,
  };
};

export const useHotelRoomsQuery = (hotelId: string) => {
  return useQuery(getHotelRoomsQueryConfig(hotelId));
};
