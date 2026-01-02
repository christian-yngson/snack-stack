import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import getCategoryOptions from "./functions/getCategoryOptions";
import { visuallyHidden } from "@mui/utils";

function FoodCategorySelect() {
  const options = getCategoryOptions();

  return (
    <Stack sx={{ flex: "0 1 100%", width: "100%" }}>
      <InputLabel id="food-categories" sx={visuallyHidden}>
        Food Category
      </InputLabel>
      <Select
        labelId="food-categories"
        id="select"
        defaultValue={options[0].value}
        sx={{ textAlign: "left" }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </Stack>
  );
}

export default FoodCategorySelect;
