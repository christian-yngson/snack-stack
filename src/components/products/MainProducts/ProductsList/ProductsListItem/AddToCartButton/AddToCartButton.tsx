import IconButton from "@mui/material/IconButton";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ProductListItem from "../ProductsListItem";
import useAddToCart from "./hooks/useAddToCart";
import Tooltip from "@mui/material/Tooltip";
import { useIsProductInCart } from "@/redux/features/cart/selectors";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface Props {
  order: Parameters<typeof ProductListItem>[number]["product"];
}

/* @TODO add test immediate */
function AddToCartButton({ order }: Props) {
  const addToCart = useAddToCart();
  const isProductInCart = useIsProductInCart();

  if (isProductInCart(order.id)) {
    return (
      <Tooltip title="Product is already in the cart">
        <CheckCircleIcon color="success" sx={{ width: 32, height: 40 }} />
      </Tooltip>
    );
  }

  return (
    <IconButton
      aria-label="add to shopping cart"
      color="primary"
      onClick={() => addToCart({ ...order, quantity: 1 })}
    >
      <ShoppingCartOutlinedIcon />
    </IconButton>
  );
}

export default AddToCartButton;
