import CardMedia from "@mui/material/CardMedia";
import Burger from "@/assets/images/home/burger.jpg";
/* @TODO add test immediate */
function CarouselItem() {
  return (
    <CardMedia
      key={Burger}
      component="img"
      image={Burger}
      alt={"Burger"}
      sx={{
        width: "100%",
        height: "60vh",
        objectFit: "cover", // fills container, crops if needed
      }}
    />
  );
}

export default CarouselItem;
