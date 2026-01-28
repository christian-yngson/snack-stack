import CarouselItemButton from "../CarouselItemButton";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface Props {
  onClick(): void;
}

function CarouselNextButton({ onClick }: Props) {
  return (
    <CarouselItemButton
      aria-label="Next carousel item"
      onClick={onClick}
      sx={{
        position: "absolute",
        right: 20,
        top: "50%",
        transform: "translateY(-50%)",
        color: "white",
      }}
    >
      <ArrowForwardIosIcon />
    </CarouselItemButton>
  );
}

export default CarouselNextButton;
