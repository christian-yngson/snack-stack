import Button from "@mui/material/Button";
import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
}
function NavigationTextButton({ children }: Props) {
  return (
    <Button color="inherit" sx={{ textTransform: "none" }}>
      {children}
    </Button>
  );
}

export default NavigationTextButton;
