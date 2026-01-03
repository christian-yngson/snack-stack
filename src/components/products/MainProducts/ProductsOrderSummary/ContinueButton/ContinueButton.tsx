import Button from "@mui/material/Button";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

/* @TODO add test later */
function ContinueButton() {
  return (
    <Button
      variant="contained"
      sx={{ justifyContent: "space-between" }}
      endIcon={<ChevronRightIcon />}
    >
      Continue
    </Button>
  );
}

export default ContinueButton;
