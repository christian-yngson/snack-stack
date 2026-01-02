import List from "@mui/material/List";
import Grid from "@mui/material/Grid";
import ProductsListItem from "./ProductsListItem";
import getFoodItems from "@/lib/functions/getFoodItems";

function ProductsList() {
  const foodItems = getFoodItems();
  return (
    <Grid container spacing={{ xs: 2, md: 3 }} component={List}>
      {foodItems.map((item) => (
        <ProductsListItem
          key={item.id}
          name={item.name}
          description={item.description}
          image={item.image}
          price={item.price}
        />
      ))}
    </Grid>
  );
}

export default ProductsList;
