import axios from "axios";
import { Hotel } from "components/HotelsList";

axios.defaults.baseURL = "https://obmng.dbm.guestline.net/api";

export const getHotels = async () => {
  try {
    const res = await axios.get<Hotel[]>("/hotels?collection-id=OBMNG");

    return res.data;
  } catch (e) {
    console.log("Error", e);
  }
};
