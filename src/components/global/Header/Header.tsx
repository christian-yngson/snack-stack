import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import HeaderContent from "./HeaderContent";
import SecondaryColorBar from "./SecondaryColorBar";
import HeaderContentContainer from "./HeaderContent/HeaderContentContainer";

function Header() {
  return (
    <Stack>
      <AppBar position="static" elevation={0} color="transparent">
        <Toolbar>
          <HeaderContentContainer>
            <HeaderContent />
          </HeaderContentContainer>
        </Toolbar>
      </AppBar>
      <SecondaryColorBar />
    </Stack>
  );
}

export default Header;
