import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import Button from "@mui/material/Button";
import Logo from "../../../assets/images/snack-stack-logo.png";
import Typography from "@mui/material/Typography";

/* @TODO add test immediate */
function Header() {
  return (
    <Stack>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" elevation={0} color="transparent">
          <Toolbar>
            <Container>
              <Stack>
                <Stack
                  sx={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <img
                    src={Logo}
                    alt="Snack Stack Logo"
                    style={{ width: "auto", height: "90px" }}
                  />
                  <Stack direction="row" spacing={0}>
                    <Stack direction="row" spacing={0}>
                      <Button color="inherit" sx={{ textTransform: "none" }}>
                        Home
                      </Button>
                      <Button color="inherit" sx={{ textTransform: "none" }}>
                        Order
                      </Button>
                      <Button color="inherit" sx={{ textTransform: "none" }}>
                        Faq
                      </Button>
                      <Button color="inherit" sx={{ textTransform: "none" }}>
                        Contact
                      </Button>
                    </Stack>
                    <Stack direction="row" spacing={0} alignItems="center">
                      <Button color="primary">
                        <HeadsetMicOutlinedIcon fontSize="large" />
                      </Button>
                      <Button color="primary">
                        <ShoppingCartOutlinedIcon fontSize="large" />
                      </Button>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </Container>
          </Toolbar>
        </AppBar>
      </Box>
      <Stack
        className="bar"
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
    </Stack>
  );
}

export default Header;
