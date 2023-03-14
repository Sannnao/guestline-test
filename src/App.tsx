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
    <div className="App">
      <Box maxHeight="300px" height={"300px"} component="header">
        <CarouselLib
          autoPlay
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
                height={300}
                src={image.url}
                alt={image.alt}
              />
            </Box>
          ))}
        </CarouselLib>
      </Box>
      <Box display="flex" justifyContent={"center"} component="main">
        <HotelsList />
      </Box>
    </div>
  );
}

export default App;
