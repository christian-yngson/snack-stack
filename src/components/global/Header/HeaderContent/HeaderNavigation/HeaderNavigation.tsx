import Button from "@mui/material/Button";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import Stack from "@mui/material/Stack";
import ShoppingCartButton from "./ShoppingCartButton";
import HeaderLink from "./HeaderLink";
import Routes from "@/router/Routes";

function HeaderNavigation() {
  const nav = [
    { to: "/", label: "Home" },
    { to: Routes.order, label: "Order" },
    { to: Routes.faq, label: "Faq" },
    { to: Routes.contact, label: "Contact" },
  ];

  return (
    <Stack direction="row" spacing={0}>
      <Stack
        gap={4}
        direction="row"
        component="nav"
        aria-label="main navigation"
        display={{
          xs: "none",
          sm: "flex",
        }}
      >
        {nav.map(({ to, label }) => (
          <HeaderLink key={label} to={to}>
            {label}
          </HeaderLink>
        ))}
      </Stack>
      <Stack direction="row" spacing={0} alignItems="center">
        <Button color="primary" aria-label="customer support">
          <HeadsetMicOutlinedIcon fontSize="large" />
        </Button>
        <ShoppingCartButton />
      </Stack>
    </Stack>
  );
}

export default HeaderNavigation;
