import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { type RootState } from "@/redux/store";

function CartItemsList() {
  const cartItems = useSelector((state: RootState) => state.cart.value);
  return cartItems.map((c) => <CartItem key={c.id} order={c} />);
}

export default CartItemsList;
