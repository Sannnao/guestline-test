import { useQuery } from "@tanstack/react-query";
import { getHotels } from "api";

type HotelsListProps = {};

export type Hotel = {
  id: string;
  name: string;
  description: string;
  address1: string;
  address2: string;
  postcode: string;
  town: string;
  country: string;
  countryCode: string;
  starRating: string;
  facilities: { code: string }[];
  telephone: string;
  email: string;
  images: { url: string; alt?: string }[];
  checkInHours: string;
  checkInMinutes: string;
  checkOutHours: string;
  checkOutMinutes: string;
  position: { latitude?: number; longitude?: number; timezone: string };
};

export const HotelsList = ({}: HotelsListProps) => {
  const query = useQuery({ queryKey: ["hotels"], queryFn: getHotels });

  console.log(query.data);
  return <div>helo</div>;
};
