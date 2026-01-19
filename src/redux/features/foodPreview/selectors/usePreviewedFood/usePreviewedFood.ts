import { useSelector } from "react-redux";
import { type RootState } from "@/redux/store";

const usePreviewedFood = () => {
  return useSelector(
    (state: RootState) => state.foodPreview.food
  ) as NonNullable<RootState["foodPreview"]["food"]>;
};

export default usePreviewedFood;
