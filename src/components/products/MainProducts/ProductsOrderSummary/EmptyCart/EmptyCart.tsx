import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import Typography from "@mui/material/Typography";

function EmptyCart() {
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
        <Box
          sx={{
            width: 100,
            height: 66,
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: (theme) => theme.palette.grey[100],
          }}
        >
          <ProductionQuantityLimitsIcon
            sx={{ fontSize: 40, color: (theme) => theme.palette.grey[300] }}
          />
        </Box>
        <Stack alignItems="flex-start">
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            Your cart is empty
          </Typography>
          <Typography
            variant="caption"
            sx={{ color: "text.secondary", textAlign: "left" }}
          >
            Start adding products.
          </Typography>
        </Stack>
      </Stack>
      <Typography
        variant="body2"
        sx={{ color: (theme) => theme.palette.text.secondary }}
      >
        $0.00
      </Typography>
    </Stack>
  );
}

export default EmptyCart;
