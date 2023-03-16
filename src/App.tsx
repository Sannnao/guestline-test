import { useState } from "react";
import { Box } from "@mui/material";
import { FilterData } from "components/Filter";
import { HotelsList } from "components/HotelsList";
import { Header } from "components/Header";

function App() {
  const [filterData, setFilterData] = useState<FilterData>({
    rating: null,
    children: null,
    adults: null,
  });

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      height={"100%"}
      overflow="hidden"
      boxSizing={"border-box"}
      paddingBottom="20px"
    >
      <Header setFilterData={setFilterData} />
      <Box
        display="flex"
        flexGrow="1"
        justifyContent={"center"}
        component="main"
        overflow="auto"
        paddingTop="30px"
      >
        <HotelsList filterData={filterData} />
      </Box>
    </Box>
  );
}

export default App;
