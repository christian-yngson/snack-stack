import Stack from "@mui/material/Stack";
import DishCategoriesHeroText from "./DishCategoriesHeroText";
import DishCategoryCards from "./DishCategoryCards";

/* @TODO add test later */
function DishCategories() {
  console.log("them cats");
  return (
    <Stack
      sx={{
        gap: {
          xs: 4,
          md: 8,
        },
        py: {
          xs: 4,
          sm: 10,
          md: 12,
        },
      }}
    >
      <DishCategoriesHeroText />
      <DishCategoryCards />
    </Stack>
  );
}

export default DishCategories;
