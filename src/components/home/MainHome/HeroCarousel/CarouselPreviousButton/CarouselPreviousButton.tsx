import CarouselItemButton from "../CarouselItemButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

interface Props {
  onClick(): void;
}

function CarouselPreviousButton({ onClick }: Props) {
  return (
    <CarouselItemButton
      aria-label="Previous"
      onClick={onClick}
      sx={{
        position: "absolute",
        left: 20,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1,
        color: "white",
      }}
    >
      <ArrowBackIosIcon />
    </CarouselItemButton>
  );
}

export default CarouselPreviousButton;
