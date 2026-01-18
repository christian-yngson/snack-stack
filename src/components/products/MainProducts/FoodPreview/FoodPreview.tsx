import Dialog from "@mui/material/Dialog";
import FoodPreviewTitle from "./FoodPreviewTitle";
import Divider from "@mui/material/Divider";
import FoodPreviewContent from "./FoodPreviewContent";
import FoodPreviewActions from "./FoodPreviewActions";
import usePreviewOpen from "@/redux/features/foodPreview/selectors/usePreviewOpen";
import { useDispatch } from "react-redux";
import { closePreview } from "@/redux/features/foodPreview/foodPreviewSlice";

function FoodPreview() {
  const open = usePreviewOpen();
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(closePreview());
  };

  return (
    <Dialog open={open} fullWidth onClose={onClick}>
      <FoodPreviewTitle />
      <Divider />
      <FoodPreviewContent />
      <Divider />
      <FoodPreviewActions />
    </Dialog>
  );
}

export default FoodPreview;
