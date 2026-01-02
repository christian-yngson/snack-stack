import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import HeadingAndFilterReset from "./HeadingAndFIlterReset";
import ProductsFilterElements from "./ProductsFilterElements";
import Stack from "@mui/material/Stack";

/* @TODO add test immediate */
function ProductsFilter() {
  return (
    <Card sx={{ minWidth: 275 }} variant="outlined">
      <CardContent>
        <Stack gap={2}>
          <HeadingAndFilterReset />
          <ProductsFilterElements />
        </Stack>
      </CardContent>
    </Card>
  );
}

export default ProductsFilter;
