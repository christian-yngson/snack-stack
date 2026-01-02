import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import ProductsFilter from "./ProductsFilter";

/* @TODO add test immediate */
function Main() {
  return (
    <Container sx={{ my: 6 }}>
      <Stack direction="row" gap={6}>
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
