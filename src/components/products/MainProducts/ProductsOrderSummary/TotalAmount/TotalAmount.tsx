import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

function TotalAmount() {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Typography variant="body1" sx={{ fontWeight: 600 }}>
        Total
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: 600 }}>
        $10.00
      </Typography>
    </Stack>
  );
}

export default TotalAmount;
