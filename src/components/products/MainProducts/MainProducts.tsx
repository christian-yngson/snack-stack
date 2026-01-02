import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import ProductsFilter from "./ProductsFilter";

/* @TODO add test later */
function Main() {
  return (
    <Container sx={{ my: 6 }}>
      <Stack direction={{ sm: "column", md: "row" }} gap={6}>
        <Stack sx={{ flexGrow: 1 }}>
          <ProductsFilter />
          <div>products here</div>
        </Stack>
        <div>order summary here</div>
      </Stack>
    </Container>
  );
}

export default Main;
