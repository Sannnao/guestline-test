import { Box, Card, CardContent, Typography } from "@mui/material";
import { Image } from "components/HotelItem";
import { Carousel } from "components/Carousel";

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

type RoomsListProps = {
  rooms: Room[];
};

export const RoomsList = ({ rooms }: RoomsListProps) => {
  return (
    <Box>
      {rooms.map((room) => {
        return (
          <Card
            data-testid="room"
            key={room.id}
            variant="outlined"
            sx={{ margin: "2%" }}
          >
            <CardContent sx={{ display: "flex", columnGap: "2%" }}>
              {room.images.length ? (
                <Box flex="0 0 30%">
                  <Carousel images={room.images} />
                </Box>
              ) : null}
              <Box flex="0 0 15%">
                <Typography variant="h6" marginBottom="20%">
                  {room.name}
                </Typography>
                <Typography variant="body2">
                  Adults: {room.occupancy.maxAdults}
                </Typography>
                <Typography variant="body2">
                  Children: {room.occupancy.maxChildren}
                </Typography>
              </Box>
              <Box flexGrow="1">
                <Typography variant="body2">{room.longDescription}</Typography>
              </Box>
            </CardContent>
          </Card>
        );
      })}
    </Box>
  );
};
