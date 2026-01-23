import Box from "@mui/material/Box";
import { AnimatePresence, wrap } from "motion/react";
import CarouselItem from "./CarouselItem";
import Burger from "@/assets/images/home/burger.jpg";
import HawaiianPizza from "@/assets/images/home/hawaiian-pizza.jpg";
import Spaghetti from "@/assets/images/home/spaghetti.jpg";
import CarouselPreviousButton from "./CarouselPreviousButton/CarouselPreviousButton";
import CarouselNextButton from "./CarouselNextButton/CarouselNextButton";
import { useCallback, useEffect, useState } from "react";

/* @TODO add test immediate */
function HeroCarousel() {
  const items = [
    {
      image: Burger,
      altText: "Burger",
      title: "Welcome to Snack Stack",
      subtitle: "Deliciousness delivered to your door",
    },
    {
      image: HawaiianPizza,
      altText: "Hawaiian Pizza",
      title: "Fresh & Fast Delivery",
      subtitle: "Hot, delicious meals ready when you are",
    },
    {
      image: Spaghetti,
      altText: "Spaghetti",
      title: "Tasty Meals, Happy Deals",
      subtitle: "Enjoy great food without breaking the bank",
    },
  ];
  const [selectedItem, setSelectedItem] = useState<number>(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const setSlide = useCallback(
    (newDirection: 1 | -1) => {
      const nextItem = wrap(0, items.length, selectedItem + newDirection);
      setSelectedItem(nextItem);
      setDirection(newDirection);
    },
    [selectedItem, items.length],
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide(1);
    }, 5000);

    return () => clearInterval(interval);
  }, [selectedItem, setSlide]);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "60vh",
        overflow: "hidden",
        backgroundColor: "black",
      }}
    >
      <CarouselPreviousButton onClick={() => setSlide(-1)} />
      <AnimatePresence custom={direction} initial={false} mode="popLayout">
        <CarouselItem
          key={items[selectedItem].image}
          image={items[selectedItem].image}
          altText={items[selectedItem].altText}
          title={items[selectedItem].title}
          subtitle={items[selectedItem].subtitle}
        />
      </AnimatePresence>
      <CarouselNextButton onClick={() => setSlide(1)} />
    </Box>
  );
}

export default HeroCarousel;
