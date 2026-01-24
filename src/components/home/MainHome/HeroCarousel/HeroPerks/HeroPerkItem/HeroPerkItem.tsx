import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import { type ReactNode } from "react";

/* @TODO add test immediate */

interface Props {
  icon: ReactNode;
  text: string;
}
function HeroPerkItem({ icon, text }: Props) {
  return (
    <ListItem sx={{ flex: "0 1 260px" }}>
      <ListItemIcon sx={{ color: "white" }}>{icon}</ListItemIcon>
      <Typography sx={{ color: "white", fontWeight: "bold" }} variant="h6">
        {text}
      </Typography>
    </ListItem>
  );
}

export default HeroPerkItem;
