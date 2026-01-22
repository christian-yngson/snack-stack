import Box from "@mui/material/Box";
import CarouselItem from "./CarouselItem";
import Burger from "@/assets/images/home/burger.jpg";

/* @TODO add test immediate */

function HeroCarousel() {
  const carouselItems = [
    {
      image: Burger,
      altText: "Burger",
      title: "Welcome to Snack Stack",
      subtitle: "Deliciousness delivered to your door",
    },
  ];
  return (
    <Box sx={{ position: "relative", width: "100%", height: "60vh" }}>
      {carouselItems.map((item) => (
        <CarouselItem
          key={item.image}
          image={item.image}
          altText={item.altText}
          title={item.title}
          subtitle={item.subtitle}
        />
      ))}
    </Box>
  );
}

export default HeroCarousel;
