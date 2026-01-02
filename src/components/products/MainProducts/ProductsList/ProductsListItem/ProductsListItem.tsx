import ListItem from "@mui/material/ListItem";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import { Stack } from "@mui/material";

interface Props {
  name: string;
  description: string;
  image: string;
  price: number;
}

/* @TODO add test later after adding event listeners */
function ProductsListItem({ name, description, image, price }: Props) {
  return (
    <Grid size={{ xs: 12, sm: 6 }} component={ListItem} sx={{ padding: "0" }}>
      <Card>
        <CardMedia component="img" alt={name} height={200} image={image} />
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
          <IconButton aria-label="add to shopping cart" color="primary">
            <ShoppingCartOutlinedIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default ProductsListItem;
