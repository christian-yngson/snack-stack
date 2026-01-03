import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

/* @TODO add test immediate */
function CartItemQuantity() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      gap={1}
      justifyContent="flex-start"
      sx={{
        border: (theme) => `1px solid ${theme.palette.grey[300]}`,
        borderRadius: 2,
        padding: 0.5,
      }}
      alignSelf="start"
    >
      <IconButton size="small">
        <RemoveIcon fontSize="small" />
      </IconButton>
      <Typography variant="body2">1</Typography>
      <IconButton size="small">
        <AddIcon fontSize="small" />
      </IconButton>
    </Stack>
  );
}

export default CartItemQuantity;
