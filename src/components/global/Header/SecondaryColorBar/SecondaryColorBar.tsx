import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function SecondaryColorBar() {
  return (
    <Stack
      className="bar"
      aria-hidden="true"
      role="presentation"
      sx={{
        backgroundColor: "secondary.main",
      }}
    >
      <Container
        sx={{
          paddingLeft: "36px !important",
        }}
      >
        <Typography
          variant="h6"
          align="left"
          height={60}
          color="white"
          sx={{ display: "flex", alignItems: "center" }}
        >
          Pay online
        </Typography>
      </Container>
    </Stack>
  );
}

export default SecondaryColorBar;
