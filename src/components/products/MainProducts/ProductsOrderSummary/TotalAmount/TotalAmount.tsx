import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { type RootState } from "@/redux/store";

function TotalAmount() {
  const total = useSelector((state: RootState) => {
    return state.cart.value.reduce(
      (acc, order) => acc + order.price * order.quantity,
      10
    );
  });

  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Typography variant="body1" sx={{ fontWeight: 600 }}>
        Total
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: 600 }}>
        ${total.toFixed(2)}
      </Typography>
    </Stack>
  );
}

export default TotalAmount;
