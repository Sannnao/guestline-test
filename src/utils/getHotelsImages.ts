import { Hotel, Image } from "components/HotelItem";

const reduceAcc: Image[] = [];

export const getHotelsImages = (hotels: Hotel[]) => {
  return hotels.reduce((acc, hotel) => acc.concat(hotel.images), reduceAcc);
};
