import Button from "@mui/material/Button";
import useNavigateToRoute from "@/lib/hooks/useNavigateToRoute";
import Routes from "@/router/Routes";
import Box from "@mui/material/Box";

function HeroOrderButton() {
  const nav = useNavigateToRoute();

  const onClick = () => {
    nav(Routes.order);
  };
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: {
          xs: "14%",
          sm: "22%",
          md: "26%",
        },
        "@media (max-height: 800px)": {
          bottom: "10%",
        },
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <Button
        onClick={onClick}
        variant="contained"
        size="large"
        sx={{
          px: {
            xs: 3,
            sm: 6,
            md: 8,
          },
          py: {
            xs: 1,
            sm: 1.5,
            md: 2,
          },
          fontSize: {
            xs: "0.9rem",
            sm: "1.25rem",
            md: "1.5rem",
          },
          borderRadius: "60px",
        }}
      >
        Order
      </Button>
    </Box>
  );
}

export default HeroOrderButton;
