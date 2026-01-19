import DialogTitle from "@mui/material/DialogTitle";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { closePreview } from "@/redux/features/foodPreview/foodPreviewSlice";
import usePreviewedFood from "@/redux/features/foodPreview/selectors/usePreviewedFood";

function FoodPreviewTitle() {
  const food = usePreviewedFood();

  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(closePreview());
  };

  return (
    <DialogTitle>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography
          variant="body1"
          component={"strong"}
          sx={{ fontWeight: "bold" }}
        >
          {food.name}
        </Typography>
        <IconButton onClick={onClick}>
          <CloseIcon />
        </IconButton>
      </Stack>
    </DialogTitle>
  );
}

export default FoodPreviewTitle;
