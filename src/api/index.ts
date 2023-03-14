import axios from "axios";
import { Room } from "components/RoomsList";
import { Hotel } from "components/HotelItem";

axios.defaults.baseURL = "https://obmng.dbm.guestline.net/api";

export const getHotels = async () => {
  try {
    const res = await axios.get<Hotel[]>("/hotels?collection-id=OBMNG");

    return res.data;
  } catch (e) {
    console.log("Error", e);
  }
};

export const getHotelRooms = async (hotelId: string) => {
  try {
    const res = await axios.get<{ rooms: Room[] }>(
      `/roomRates/OBMNG/${hotelId}`
    );

    return res.data.rooms;
  } catch (e) {
    console.log("Error", e);
  }
};
