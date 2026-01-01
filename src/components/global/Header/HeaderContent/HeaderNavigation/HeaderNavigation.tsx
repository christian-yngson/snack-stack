import Button from "@mui/material/Button";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Stack from "@mui/material/Stack";
import NavigationTextButton from "./NavigationTextButton";

function HeaderNavigation() {
  const navTexts = ["Home", "Order", "Faq", "Contact"];

  return (
    <Stack direction="row" spacing={0}>
      <Stack
        direction="row"
        spacing={0}
        component="nav"
        aria-label="main navigation"
      >
        {navTexts.map((text) => (
          <NavigationTextButton key={text}>{text}</NavigationTextButton>
        ))}
      </Stack>
      <Stack direction="row" spacing={0} alignItems="center">
        <Button color="primary" aria-label="customer support">
          <HeadsetMicOutlinedIcon fontSize="large" />
        </Button>
        <Button color="primary" aria-label="shopping cart">
          <ShoppingCartOutlinedIcon fontSize="large" />
        </Button>
      </Stack>
    </Stack>
  );
}

export default HeaderNavigation;
