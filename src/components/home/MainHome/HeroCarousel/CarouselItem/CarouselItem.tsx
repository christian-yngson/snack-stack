import CardMedia from "@mui/material/CardMedia";
import Burger from "@/assets/images/home/burger.jpg";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import CarouselDarkOverlay from "../CarouselDarkOverlay";
/* @TODO add test immediate */
function CarouselItem() {
  return (
    <Stack sx={{ position: "relative" }}>
      <CardMedia
        key={Burger}
        component="img"
        image={Burger}
        alt={"Burger"}
        sx={{
          width: "100%",
          height: "60vh",
          objectFit: "cover", // fills container, crops if needed
        }}
      />
      <Stack
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textAlign: "center",
          zIndex: 1,
        }}
      >
        <Typography variant="h3" component="div" gutterBottom>
          Welcome to Snack Stack
        </Typography>
        <Typography variant="h5" component="div">
          Deliciousness delivered to your door
        </Typography>
      </Stack>
      <CarouselDarkOverlay />
    </Stack>
  );
}

export default CarouselItem;
