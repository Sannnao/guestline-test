import { useState, useMemo } from "react";
import { Carousel as CarouselLib } from "react-responsive-carousel";
import { Box } from "@mui/material";
import { useHotelsQuery } from "api/useHotelsQuery";
import { getHotelsImages } from "utils/getHotelsImages";
import { Filter, FilterData } from "components/Filter";
import { HotelsList } from "components/HotelsList";

function App() {
  const { data } = useHotelsQuery();
  const hotelsImages = useMemo(() => data && getHotelsImages(data), [data]);
  const [filterData, setFilterData] = useState<FilterData>({
    rating: null,
    children: null,
    adults: null,
  });

  console.log(filterData);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      height={"100%"}
      overflow="hidden"
      boxSizing={"border-box"}
      paddingBottom="20px"
    >
      <Box
        component="header"
        flex="0 0 250px"
        position="relative"
        display="flex"
        flexDirection="column"
        alignItems="center"
        boxShadow={"2px 0 2px 2px grey"}
      >
        <CarouselLib
          autoPlay
          infiniteLoop
          transitionTime={600}
          interval={3000}
          stopOnHover={false}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          showArrows={false}
        >
          {hotelsImages?.map((image, i) => (
            <Box height="100%" display="flex" alignItems="center" key={i}>
              <img
                style={{ objectFit: "cover" }}
                height={250}
                src={image.url}
                alt={image.alt}
              />
            </Box>
          ))}
        </CarouselLib>
        <Box sx={{ position: "absolute", zIndex: 9999, bottom: "-30px" }}>
          <Filter getFilterData={setFilterData} />
        </Box>
      </Box>
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
