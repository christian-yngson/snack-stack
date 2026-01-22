import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import CarouselDarkOverlay from "../CarouselDarkOverlay";
/* @TODO add test immediate */

interface Props {
  image: string;
  altText: string;
  title: string;
  subtitle: string;
}
function CarouselItem({ image, altText, title, subtitle }: Props) {
  return (
    <Stack sx={{ position: "relative" }}>
      <CardMedia
        component="img"
        image={image}
        alt={altText}
        sx={{
          width: "100%",
          height: "60vh",
          objectFit: "cover", // fills container, crops if needed
        }}
      />
      <Stack
        sx={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textAlign: "center",
          zIndex: 1,
        }}
        gap={1}
      >
        <Typography variant="h1">{title}</Typography>
        <Typography variant="h4">{subtitle}</Typography>
      </Stack>
      <CarouselDarkOverlay />
    </Stack>
  );
}

export default CarouselItem;
