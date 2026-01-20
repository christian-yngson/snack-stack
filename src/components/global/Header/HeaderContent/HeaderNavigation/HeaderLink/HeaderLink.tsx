import { NavLink } from "react-router";
import { type ReactNode } from "react";
import { styled } from "@mui/material/styles";

interface Props {
  to: string;
  children: ReactNode;
}

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  fontWeight: 500,
  display: "flex",
  alignItems: "center",
  height: "100%",
  color: theme.palette.text.primary,
  transition: "color 0.2s ease",

  "&:hover": {
    color: theme.palette.primary.main,
  },

  "&.active": {
    color: theme.palette.primary.main,
  },
}));

function HeaderLink({ to, children }: Props) {
  return <StyledNavLink to={to}>{children}</StyledNavLink>;
}

export default HeaderLink;
