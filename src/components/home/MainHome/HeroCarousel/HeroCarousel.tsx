import Box from "@mui/material/Box";
import CarouselDarkOverlay from "./CarouselDarkOverlay";
import CarouselItem from "./CarouselItem";

/* @TODO add test immediate */

function HeroCarousel() {
  return (
    <Box sx={{ position: "relative", width: "100%", height: "60vh" }}>
      <CarouselItem />
      <CarouselDarkOverlay />
    </Box>
  );
}

export default HeroCarousel;
