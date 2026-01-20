import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";
import Routes from "@/router/Routes";

function ShoppingCartButton() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(Routes.order);
  };

  return (
    <Button color="primary" aria-label="shopping cart" onClick={onClick}>
      <ShoppingCartOutlinedIcon fontSize="large" />
    </Button>
  );
}

export default ShoppingCartButton;
