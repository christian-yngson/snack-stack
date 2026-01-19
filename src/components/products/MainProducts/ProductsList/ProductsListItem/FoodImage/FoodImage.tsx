import CardMedia from "@mui/material/CardMedia";
import ButtonBase from "@mui/material/ButtonBase";
import Product from "@/models/Product";
import { useDispatch } from "react-redux";
import { previewFood } from "@/redux/features/foodPreview/foodPreviewSlice";

interface Props {
  food: Product;
}

/* @TODO add test immediate */
function FoodImage({ food }: Props) {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(previewFood(food));
  };

  if (!food) {
    return null;
  }

  return (
    <ButtonBase onClick={onClick} disableRipple sx={{ width: "100%" }}>
      <CardMedia
        component="img"
        alt={food.name}
        height={160}
        image={food.image}
        sx={{
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "scale(1.15)",
            cursor: "pointer",
          },
        }}
      />
    </ButtonBase>
  );
}

export default FoodImage;
