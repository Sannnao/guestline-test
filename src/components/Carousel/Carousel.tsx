import { Carousel as CarouselLib } from "react-responsive-carousel";
import { Box } from "@mui/material";
import { Hotel } from "components/HotelItem";

type CarouselProps = Pick<Hotel, "images">;

export const Carousel = ({ images }: CarouselProps) => {
  return (
    <CarouselLib showIndicators={false} showThumbs={false}>
      {images.map((image, i) => (
        <Box height="100%" display="flex" alignItems="center" key={i}>
          <img src={image.url} alt={image.alt} data-testid="carouselImg" />
        </Box>
      ))}
    </CarouselLib>
  );
};
