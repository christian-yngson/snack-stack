import { useSelector } from "react-redux";
import { type RootState } from "@/redux/store";

const usePreviewOpen = () => {
  return useSelector((state: RootState) => state.foodPreview.isOpen);
};

export default usePreviewOpen;
