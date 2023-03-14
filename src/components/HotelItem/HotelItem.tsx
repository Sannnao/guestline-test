import { useState, useMemo } from "react";
import { useHotelRoomsQuery } from "api/useHotelRoomsQuery";
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
import { FilterData } from "components/Filter";
import { Carousel } from "components/Carousel";
import { RoomsList, Room } from "components/RoomsList";

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

type HotelItemProps = {
  hotel: Hotel;
  filterData: FilterData;
};

export const HotelItem = ({ hotel, filterData }: HotelItemProps) => {
  const { id, name, address1, address2 } = hotel;
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const { data } = useHotelRoomsQuery(id);

  const adults = filterData.adults;
  const shouldFilterAdults = adults !== null;

  const children = filterData.children;
  const shouldFilterChildren = children !== null;

  const filteredRooms = useMemo(() => {
    let tempFilteredRooms: Room[] | undefined;

    if (shouldFilterAdults) {
      tempFilteredRooms = data
        ?.filter((room) => room.occupancy.maxAdults >= adults)
        .sort((a, b) => {
          const aAdults = a.occupancy.maxAdults;
          const bAdults = b.occupancy.maxAdults;

          if (aAdults > bAdults) {
            return 1;
          } else if (aAdults < bAdults) {
            return -1;
          } else {
            return 0;
          }
        });
    }

    if (shouldFilterChildren) {
      tempFilteredRooms = (tempFilteredRooms ? tempFilteredRooms : data)
        ?.filter((room) => {
          return room.occupancy.maxChildren >= children;
        })
        .sort((a, b) => {
          const aChildren = a.occupancy.maxChildren;
          const bChildren = b.occupancy.maxChildren;

          if (aChildren > bChildren) {
            return 1;
          } else if (aChildren < bChildren) {
            return -1;
          } else {
            return 0;
          }
        });
    }

    return tempFilteredRooms ? tempFilteredRooms : data;
  }, [data, adults, children, shouldFilterAdults, shouldFilterChildren]);

  return filteredRooms?.length !== 0 ? (
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
        {filteredRooms && <RoomsList rooms={filteredRooms} />}
      </Collapse>
    </Card>
  ) : null;
};
