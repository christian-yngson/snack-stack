import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { closePreview } from "@/redux/features/foodPreview/foodPreviewSlice";

/* @TODO add test immediate */
function FoodPreviewActions() {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(closePreview());
  };
  return (
    <DialogActions>
      <Button variant="text" color="error" onClick={onClick}>
        Close
      </Button>
    </DialogActions>
  );
}

export default FoodPreviewActions;
