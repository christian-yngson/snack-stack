import { addToCart, type Order } from "@/redux/features/cart/cartSlice";
import { useDispatch } from "react-redux";

/* @TODO add test immediate */
const useAddToCart = () => {
  const dispatch = useDispatch();
  return (params: Order) => {
    dispatch(addToCart(params));
  };
};

export default useAddToCart;
