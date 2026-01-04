import EmptyCart from "../EmptyCart";
import { useSelector } from "react-redux";
import CartItemsList from "./CarItemsList";
import { type RootState } from "@/redux/store";

/* @TODO add test immediate */
function CartDetails() {
  const cartItems = useSelector((state: RootState) => state.cart.value);

  if (cartItems.length === 0) {
    return <EmptyCart />;
  }

  return <CartItemsList />;
}

export default CartDetails;
