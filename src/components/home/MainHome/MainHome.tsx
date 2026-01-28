import HeroCarousel from "./HeroCarousel";
import DishCategories from "./DishCategories";
import Stacked from "@mui/material/Stack";

/* @TODO add test later */
function MainHome() {
  return (
    <Stacked>
      <HeroCarousel />
      <DishCategories />
    </Stacked>
  );
}

export default MainHome;
