import Box from "@mui/material/Box";
import CarouselItem from "./CarouselItem";
import CarouselPreviousButton from "./CarouselPreviousButton/CarouselPreviousButton";
import CarouselNextButton from "./CarouselNextButton/CarouselNextButton";
import HeroOrderButton from "./HeroOrderButton";
import HeroPerks from "./HeroPerks";
import getCarouselHeight from "./functions/getCarouselHeight";
import useCarousel from "./hooks/useCarousel/useCarousel";

function HeroCarousel() {
  const { items, slide, setSlide } = useCarousel();
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        backgroundColor: "black",
        ...getCarouselHeight(),
      }}
    >
      <CarouselPreviousButton
        onClick={() => setSlide((slide - 1 + items.length) % items.length)}
      />
      {items.map((item, index) => (
        <CarouselItem
          key={item.image}
          active={index === slide}
          image={item.image}
          altText={item.altText}
          title={item.title}
          subtitle={item.subtitle}
        />
      ))}
      <CarouselNextButton
        onClick={() => setSlide((slide + 1) % items.length)}
      />
      <HeroOrderButton />
      <HeroPerks />
    </Box>
  );
}

export default HeroCarousel;
