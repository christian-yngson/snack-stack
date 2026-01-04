import ListItem from "@mui/material/ListItem";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import { Stack } from "@mui/material";
import AddToCartButton from "./AddToCartButton";

interface Props {
  product: {
    id: number | string;
    name: string;
    description: string;
    price: number;
    image: string;
  };
}

function ProductsListItem({ product }: Props) {
  const { name, description, image, price } = product;
  return (
    <Grid size={{ xs: 12, sm: 6 }} component={ListItem} sx={{ padding: "0" }}>
      <Card>
        <CardMedia component="img" alt={name} height={160} image={image} />
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
