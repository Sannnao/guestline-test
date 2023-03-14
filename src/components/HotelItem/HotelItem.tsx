import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { getHotelRoomsQueryConfig } from "api/useHotelRoomsQuery";
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
import { Carousel } from "components/Carousel";
import { RoomsList } from "components/RoomsList";

export type Image = { url: string; alt?: string };

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
  images: Image[];
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
  images: Image[];
  facilities: {
    code: string;
    name: string;
  }[];
};

type HotelItemProps = {
  hotel: Hotel;
};

export const HotelItem = ({ hotel }: HotelItemProps) => {
  const queryClient = useQueryClient();
  const { id, name, address1, address2 } = hotel;
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card variant="outlined" sx={{ margin: "2%" }}>
      <CardContent sx={{ display: "flex" }}>
        <Box width="30%" marginRight="4%">
          <Carousel images={hotel.images} />
        </Box>
        <Box flexGrow="1" display={"flex"} flexDirection="column">
          <Box flexGrow="1">
            <Typography variant="h6">{name}</Typography>
            <Typography variant="body2">{address1}</Typography>
            <Typography variant="body2">{address2}</Typography>
          </Box>
          <CardActions
            sx={{
              position: "relative",
              bottom: "-20px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              onClick={handleExpandClick}
              onMouseEnter={async () => {
                await queryClient.prefetchQuery(getHotelRoomsQueryConfig(id));
              }}
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
