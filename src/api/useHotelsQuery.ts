import { useQuery } from "@tanstack/react-query";
import { getHotels } from "api";

export const useHotelsQuery = () => {
  return useQuery({
    queryKey: ["hotels"],
    queryFn: getHotels,
  });
};
