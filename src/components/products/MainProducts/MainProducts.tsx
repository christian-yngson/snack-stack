import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import ProductsFilter from "./ProductsFilter";
import ProductsList from "./ProductsList";
import ProductsOrderSummary from "./ProductsOrderSummary";
import FoodPreview from "./FoodPreview";

/* @TODO add test later */
function Main() {
  return (
    <Container sx={{ my: 6 }}>
      <FoodPreview />
      <Stack direction={{ sm: "column", md: "row" }} gap={6}>
        <Stack sx={{ flexGrow: 1 }} gap={4}>
          <ProductsFilter />
          <ProductsList />
        </Stack>
        <ProductsOrderSummary />
      </Stack>
    </Container>
  );
}

export default Main;
