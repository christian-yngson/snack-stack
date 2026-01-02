import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import HeaderContent from "./HeaderContent";
import SecondaryColorBar from "./SecondaryColorBar";
import HeaderContentContainer from "./HeaderContent/HeaderContentContainer";

function Header() {
  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        color="transparent"
        sx={{
          top: 0,
          backgroundColor: "white",
        }}
      >
        <Toolbar>
          <HeaderContentContainer>
            <HeaderContent />
          </HeaderContentContainer>
        </Toolbar>
      </AppBar>
      <SecondaryColorBar />
    </>
  );
}

export default Header;
