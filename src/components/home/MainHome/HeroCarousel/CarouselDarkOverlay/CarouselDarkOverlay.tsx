import Box from "@mui/material/Box";

/* @TODO add test immediate */
function CarouselDarkOverlay() {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.46)",
      }}
    />
  );
}

export default CarouselDarkOverlay;
