import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { visuallyHidden } from "@mui/utils";
import InputLabel from "@mui/material/InputLabel";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

/* @TODO add test immediate */
function FoodSearch() {
  return (
    <Stack sx={{ flex: "0 1 100%", width: "100%" }}>
      <InputLabel htmlFor="search-food-items" sx={visuallyHidden}>
        Search Food Items
      </InputLabel>
      <TextField
        id="search-food-items"
        placeholder="Search"
        variant="outlined"
        hiddenLabel
        slotProps={{
          input: {
            endAdornment: (
              <SearchOutlinedIcon sx={{ color: "text.secondary" }} />
            ),
          },
        }}
      />
    </Stack>
  );
}

export default FoodSearch;
