import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

/* @TODO add test immediate */
function DeliveryAmount() {
  return (
    <Stack>
      <Divider />
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mt: 2 }}
      >
        <Typography variant="body2">Delivery</Typography>
        <Typography variant="body2">$10.00</Typography>
      </Stack>
      <Divider sx={{ mt: 2 }} />
    </Stack>
  );
}

export default DeliveryAmount;
