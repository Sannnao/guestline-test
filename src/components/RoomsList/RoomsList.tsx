import { useHotelRoomsQuery } from "api/useHotelRoomsQuery";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { Carousel } from "components/Carousel";

type RoomsListProps = { hotelId: string };

export const RoomsList = ({ hotelId }: RoomsListProps) => {
  const { data } = useHotelRoomsQuery(hotelId);

  return (
    <Box>
      {data?.map((room) => {
        return (
          <Card key={room.id} variant="outlined" sx={{ margin: "2%" }}>
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
