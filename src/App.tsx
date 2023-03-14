import { useMemo } from "react";
import { Carousel as CarouselLib } from "react-responsive-carousel";
import { useHotelsQuery } from "api/useHotelsQuery";
import { getHotelsImages } from "utils/getHotelsImages";
import { Box, Container } from "@mui/material";
import { Carousel } from "components/Carousel";
import { HotelsList } from "components/HotelsList";

function App() {
  const { data } = useHotelsQuery();
  const hotelsImages = useMemo(() => data && getHotelsImages(data), [data]);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      height={"100%"}
      overflow="hidden"
      boxSizing={"border-box"}
      paddingBottom="20px"
    >
      <Box flex="0 0 250px" component="header">
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
      </Box>
      <Box
        display="flex"
        flexGrow="1"
        justifyContent={"center"}
        component="main"
        overflow="auto"
        paddingBottom="20px"
      >
        <HotelsList />
      </Box>
    </Box>
  );
}

export default App;
