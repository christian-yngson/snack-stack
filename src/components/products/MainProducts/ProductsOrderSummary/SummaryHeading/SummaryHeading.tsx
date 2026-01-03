import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
/* @TODO add test immediate */
function SummaryHeading() {
  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.secondary.main,
        width: "100%",
        height: 56,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="body1" sx={{ color: "white", fontWeight: 600 }}>
        Order Summary
      </Typography>
    </Box>
  );
}

export default SummaryHeading;
