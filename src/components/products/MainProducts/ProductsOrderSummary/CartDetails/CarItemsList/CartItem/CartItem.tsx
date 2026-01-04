import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import CartItemQuantity from "./CartItemQuantity";
import RemoveFromCart from "./RemoveFromCart";
import { type Order } from "@/redux/features/cart/cartSlice";

interface Props {
  order: Order;
}

/* @TODO add test immediate */
function CartItem({ order }: Props) {
  const { id, quantity, price, name, image } = order;
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="flex-start"
      gap={2}
    >
      <Stack
        direction="row"
        gap={2}
        alignItems="flex-start"
        justifyContent="flex-start"
      >
        <Avatar
          src={image}
          variant="rounded"
          sx={{ width: 100, height: 66 }}
          alt={name}
        >
          {name}
        </Avatar>
        <Stack justifyContent="space-between" alignSelf="stretch">
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            {name}
          </Typography>
          <CartItemQuantity id={id} />
        </Stack>
      </Stack>
      <Stack
        justifyContent="space-between"
        alignItems="flex-end"
        alignSelf="stretch"
      >
        <Typography
          variant="body2"
          sx={{ color: (theme) => theme.palette.text.secondary }}
        >
          ${price * quantity}
        </Typography>
        <RemoveFromCart productId={id} />
      </Stack>
    </Stack>
  );
}

export default CartItem;
