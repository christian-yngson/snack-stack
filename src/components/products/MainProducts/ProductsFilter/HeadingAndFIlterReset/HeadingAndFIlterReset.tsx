import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

function HeadingAndFilterReset() {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="flex-start"
    >
      <Typography variant="h6" sx={{ color: "text.secondary" }}>
        Filters
      </Typography>
      <Button size="small">Reset filters</Button>
    </Stack>
  );
}

export default HeadingAndFilterReset;
