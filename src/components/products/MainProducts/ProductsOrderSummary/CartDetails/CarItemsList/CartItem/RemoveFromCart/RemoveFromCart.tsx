import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { removeFromCart } from "@/redux/features/cart/cartSlice";

interface Props {
  productId: number | string;
}
/* @TODO add test immediate */
function RemoveFromCart({ productId }: Props) {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(removeFromCart(productId));
  };
  return (
    <IconButton
      aria-label="remove from cart"
      onClick={onClick}
      sx={{ position: "relative", right: -8, bottom: -8 }}
    >
      <DeleteIcon color="error" />
    </IconButton>
  );
}

export default RemoveFromCart;
