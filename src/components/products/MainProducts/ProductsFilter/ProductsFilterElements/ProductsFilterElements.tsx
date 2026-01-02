import FoodCategorySelect from "./FoodCategorySelect";
import Stack from "@mui/material/Stack";
import FoodSearch from "./FoodSearch";

function ProductsFilterElements() {
  return (
    <Stack
      sx={{ flexDirection: { xs: "column", sm: "row" } }}
      gap={4}
      justifyContent="space-between"
      alignItems="center"
      flexGrow={1}
    >
      <FoodCategorySelect />
      <FoodSearch />
    </Stack>
  );
}

export default ProductsFilterElements;
