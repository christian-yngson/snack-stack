import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import CarouselDarkOverlay from "../CarouselDarkOverlay";
import Box from "@mui/material/Box";
import getCarouselHeight from "../functions/getCarouselHeight";
import getAnimation from "./functions/getAnimation";

interface Props {
  active: boolean;
  image: string;
  altText: string;
  title: string;
  subtitle: string;
}

/* @TODO add test immediate */
function CarouselItem({ active, image, altText, title, subtitle }: Props) {
  return (
    <Box
      className="carousel-item"
      sx={{
        position: "absolute",
        opacity: active ? 1 : 0,
        transition: "opacity 0.5s ease-in-out",
        zIndex: active ? 1 : 0,
        width: "100%",
      }}
    >
      <CardMedia
        component="img"
        image={image}
        alt={altText}
        sx={{
          ...getCarouselHeight(),
          width: "100%",
          objectFit: "cover", // fills container, crops if needed
        }}
      />
      <Stack
        className="typography"
        sx={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textAlign: "center",
          zIndex: 1,
          width: "96%",
        }}
        gap={1}
      >
        <Typography
          key={`${active}-title`}
          variant="h1"
          sx={{
            opacity: 0,
            left: -80,
            position: "relative",
            animation: getAnimation({ left: -80, duration: 400, delay: 400 }),
          }}
        >
          {title}
        </Typography>

        <Typography
          key={`${active}-subtitle`}
          variant="h4"
          sx={{
            opacity: 0,
            left: 80,
            position: "relative",
            animation: getAnimation({ left: 80, duration: 300, delay: 600 }),
          }}
        >
          {subtitle}
        </Typography>
      </Stack>
      <CarouselDarkOverlay />
    </Box>
  );
}
export default CarouselItem;
