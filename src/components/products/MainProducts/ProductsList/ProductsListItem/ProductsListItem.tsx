import ListItem from "@mui/material/ListItem";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import { Stack } from "@mui/material";
import AddToCartButton from "./AddToCartButton";
import FoodImage from "./FoodImage";
import Product from "@/models/Product";

interface Props {
  product: Product;
}

function ProductsListItem({ product }: Props) {
  const { name, description, price } = product;
  return (
    <Grid size={{ xs: 12, sm: 6 }} component={ListItem} sx={{ padding: "0" }}>
      <Card>
        <FoodImage food={product} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {description}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            display: "flex",
          }}
        >
          <Stack direction="row" alignItems="center">
            <AccountBalanceWalletOutlinedIcon
              fontSize="small"
              sx={{ verticalAlign: "middle", mr: 1 }}
            />
            <Typography variant="body1">${price}</Typography>
          </Stack>
          <AddToCartButton order={product} />
        </CardActions>
      </Card>
    </Grid>
  );
}

export default ProductsListItem;
