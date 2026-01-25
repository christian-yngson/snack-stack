import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

function DishCategoriesHeroText() {
  return (
    <Stack gap={1} px={2}>
      <Typography variant="hero" component="div" sx={{ flexGrow: 1 }}>
        More Than{" "}
        <Typography component="span" variant="hero" color="primary">
          200 Dishes
        </Typography>{" "}
        to Order!
      </Typography>
      <Typography variant="body1" color="text.secondary">
        From appetizers to desserts, find your next favorite meal today!
      </Typography>
    </Stack>
  );
}

export default DishCategoriesHeroText;
