import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { Box, Rating, Collapse } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

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

type HotelItemProps = {
  hotel: Hotel;
};

export const HotelItem = ({ hotel }: HotelItemProps) => {
  const { name, address1, address2 } = hotel;

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
        <CardContent>
          <Box width="30%">
            <Typography variant="h6">{}</Typography>
          </Box>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is
            absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
            shrimp and mussels, tucking them down into the rice, and cook again
            without stirring, until mussels have opened and rice is just tender,
            5 to 7 minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};
