import { useMemo } from "react";
import { useHotelsQuery } from "api/useHotelsQuery";
import { getHotelsImages } from "utils/getHotelsImages";
import { Carousel as CarouselLib } from "react-responsive-carousel";
import { Box } from "@mui/material";
import { Filter, FilterData } from "components/Filter";

type HeaderProps = {
  setFilterData: React.Dispatch<React.SetStateAction<FilterData>>;
};

export const Header = ({ setFilterData }: HeaderProps) => {
  const { data } = useHotelsQuery();
  const hotelsImages = useMemo(() => data && getHotelsImages(data), [data]);

  return (
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
              data-testid="headerCarouselImg"
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
  );
};
