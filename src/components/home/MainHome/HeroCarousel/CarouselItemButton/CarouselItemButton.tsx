import MotionIconButton from "@/components/common/MotionIconButton";
import { type IconButtonProps } from "@mui/material";

function CarouselItemButton(props: IconButtonProps) {
  return (
    <MotionIconButton
      initial={false}
      aria-label={props["aria-label"]}
      onClick={props.onClick}
      sx={{
        ...props.sx,
        display: {
          xs: "none",
          md: "flex",
        },
      }}
    >
      {props.children}
    </MotionIconButton>
  );
}

export default CarouselItemButton;
