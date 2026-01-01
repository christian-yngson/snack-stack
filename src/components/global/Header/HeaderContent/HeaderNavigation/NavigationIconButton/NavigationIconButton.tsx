import Button from "@mui/material/Button";
import { type ReactNode } from "react";

interface Props {
  ariaLabel: string;
  children: ReactNode;
}

function NavigationIconButton({ children, ariaLabel }: Props) {
  return (
    <Button color="primary" aria-label={ariaLabel}>
      {children}
    </Button>
  );
}

export default NavigationIconButton;
