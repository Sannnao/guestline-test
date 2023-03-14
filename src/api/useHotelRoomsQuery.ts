import { useQuery } from "@tanstack/react-query";
import { getHotelRooms } from "api";

export const getHotelRoomsQueryConfig = (hotelId: string) => {
  return {
    queryKey: ["hotelRooms", hotelId],
    queryFn: () => getHotelRooms(hotelId),
  };
};

export const useHotelRoomsQuery = (hotelId: string) => {
  return useQuery(getHotelRoomsQueryConfig(hotelId));
};
