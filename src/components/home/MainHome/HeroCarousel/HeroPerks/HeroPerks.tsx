import List from "@mui/material/List";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import LockResetOutlinedIcon from "@mui/icons-material/LockResetOutlined";
import HeroPerkItem from "./HeroPerkItem/HeroPerkItem";

/* @TODO add test immediate */
function HeroPerks() {
  const perks = [
    {
      icon: <LocalShippingOutlinedIcon />,
      text: "Fast Delivery",
    },
    {
      text: "Easy Ordering",
      icon: <ShoppingCartOutlinedIcon />,
    },
    {
      text: "Premium Quality",
      icon: <WorkspacePremiumOutlinedIcon />,
    },
    {
      text: "Secure Payments",
      icon: <LockResetOutlinedIcon />,
    },
  ];
  return (
    <List
      sx={{
        position: "absolute",
        bottom: 60,
        width: "100%",
        left: "50%",
        transform: "translateX(-50%)",
        display: {
          xs: "none",
          md: "flex",
        },
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        "@media (max-height: 800px)": {
          display: "none",
        },
      }}
    >
      {perks.map((perk, index) => (
        <HeroPerkItem key={index} icon={perk.icon} text={perk.text} />
      ))}
    </List>
  );
}

export default HeroPerks;
