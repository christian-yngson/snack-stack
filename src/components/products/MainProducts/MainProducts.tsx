import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import ProductsFilter from "./ProductsFilter";
import ProductsList from "./ProductsList";
import ProductsOrderSummary from "./ProductsOrderSummary";
import FoodPreview from "./FoodPreview";
import SecondaryColorBar from "@/components/global/Header/SecondaryColorBar";

function Main() {
  return (
    <Stack>
      <SecondaryColorBar />
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
    </Stack>
  );
}

export default Main;
