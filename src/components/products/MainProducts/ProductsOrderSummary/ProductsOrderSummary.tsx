import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import CardContent from "@mui/material/CardContent";
import SummaryHeading from "./SummaryHeading";
import DeliveryAmount from "./DeliveryAmount";
import TotalAmount from "./TotalAmount";
import ContinueButton from "./ContinueButton";
import CartDetails from "./CartDetails";

function ProductsOrderSummary() {
  return (
    <Card
      sx={{
        minWidth: {
          xs: 100,
          sm: 400,
        },
        alignSelf: "flex-start",
        position: "sticky",
        top: 100,
      }}
    >
      <CardContent sx={{ padding: 0, paddingBottom: "0px !important" }}>
        <SummaryHeading />
        <Stack sx={{ padding: 4 }} gap={2}>
          <CartDetails />
          <DeliveryAmount />
          <TotalAmount />
          <ContinueButton />
        </Stack>
      </CardContent>
    </Card>
  );
}

export default ProductsOrderSummary;
