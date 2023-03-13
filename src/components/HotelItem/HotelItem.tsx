import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import {
  Box,
  Rating,
  Collapse,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import { RoomsList } from "components/RoomsList";

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

export type Room = {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  occupancy: {
    maxAdults: number;
    maxChildren: number;
    maxOverall: number;
  };
  disabledAccess: boolean;
  bedConfiguration: string;
  images: {
    url: string;
    alt: string;
  }[];
  facilities: {
    code: string;
    name: string;
  }[];
};

type HotelItemProps = {
  hotel: Hotel;
};

export const HotelItem = ({ hotel }: HotelItemProps) => {
  const { id, name, address1, address2 } = hotel;
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card variant="outlined" sx={{ margin: "2%" }}>
      <CardContent sx={{ display: "flex" }}>
        <Box width="30%" marginRight="4%">
          <Carousel showIndicators={false} showThumbs={false}>
            {hotel.images.map((image, i) => (
              <Box height="100%" display="flex" alignItems="center" key={i}>
                <img src={image.url} alt={image.alt} />
              </Box>
            ))}
          </Carousel>
        </Box>
        <Box flexGrow="1" display={"flex"} flexDirection="column">
          <Box flexGrow="1">
            <Typography variant="h6">{name}</Typography>
            <Typography variant="body2">{address1}</Typography>
            <Typography variant="body2">{address2}</Typography>
          </Box>
          <CardActions sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show rooms"
            >
              {expanded ? "Hide rooms" : "Show rooms"}
            </Button>
          </CardActions>
        </Box>
        <Rating value={+hotel.starRating} readOnly />
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <RoomsList hotelId={id} />
      </Collapse>
    </Card>
  );
};
