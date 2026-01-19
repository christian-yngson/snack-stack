import DialogContent from "@mui/material/DialogContent";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import usePreviewedFood from "@/redux/features/foodPreview/selectors/usePreviewedFood";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

function FoodPreviewContent() {
  const { name, image, ingredients, nutrition } = usePreviewedFood();

  return (
    <DialogContent>
      <Stack
        gap={{
          xs: 2,
          sm: 4,
        }}
      >
        <CardMedia component="img" alt={name} height={300} image={image} />
        <Stack
          spacing={{
            xs: 1,
            sm: 3,
          }}
        >
          <Typography variant="body1" fontWeight="bold" color="textSecondary">
            Ingredients
          </Typography>
          <Stack direction="row" flexWrap="wrap" gap={2}>
            {ingredients.map((ingredient) => (
              <Chip key={ingredient} label={ingredient} />
            ))}
          </Stack>
        </Stack>
        <Stack
          spacing={{
            xs: 1,
            sm: 3,
          }}
        >
          <Typography variant="body1" fontWeight="bold" color="textSecondary">
            Nutrition
          </Typography>
          <Stack direction="row" gap={2} flexWrap="wrap">
            {nutrition.map((nutrient) => (
              <Chip key={nutrient} label={nutrient} />
            ))}
          </Stack>
        </Stack>
      </Stack>
    </DialogContent>
  );
}

export default FoodPreviewContent;
