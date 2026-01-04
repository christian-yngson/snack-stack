import { useSelector } from "react-redux";
import { type RootState } from "@/redux/store";

const useIsProductInCart = () => {
  const cartItems = useSelector((state: RootState) => state.cartReducer.value);

  return (productId: string | number): boolean => {
    return cartItems.some((item) => item.id === productId);
  };
};

export default useIsProductInCart;
