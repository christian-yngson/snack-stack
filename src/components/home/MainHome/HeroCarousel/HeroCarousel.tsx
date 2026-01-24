import Box from "@mui/material/Box";
import { AnimatePresence } from "motion/react";
import CarouselItem from "./CarouselItem";
import CarouselPreviousButton from "./CarouselPreviousButton/CarouselPreviousButton";
import CarouselNextButton from "./CarouselNextButton/CarouselNextButton";
import HeroOrderButton from "./HeroOrderButton";
import HeroPerks from "./HeroPerks";
import getCarouselHeight from "./functions/getCarouselHeight";
import useCarousel from "./hooks/useCarousel/useCarousel";

function HeroCarousel() {
  const { activeItem, setSlide } = useCarousel();
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: getCarouselHeight(),
        overflow: "hidden",
        backgroundColor: "black",
      }}
    >
      <CarouselPreviousButton onClick={() => setSlide(-1)} />
      <AnimatePresence initial={false} mode="popLayout">
        <CarouselItem
          key={activeItem.image}
          image={activeItem.image}
          altText={activeItem.altText}
          title={activeItem.title}
          subtitle={activeItem.subtitle}
        />
      </AnimatePresence>
      <CarouselNextButton onClick={() => setSlide(1)} />
      <HeroOrderButton />
      <HeroPerks />
    </Box>
  );
}

export default HeroCarousel;
