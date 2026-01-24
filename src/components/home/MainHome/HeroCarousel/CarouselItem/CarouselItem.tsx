import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import CarouselDarkOverlay from "../CarouselDarkOverlay";
import { forwardRef } from "react";
import MotionDiv from "@/components/common/MotionDiv";
import Box from "@mui/material/Box";
import getCarouselHeight from "../functions/getCarouselHeight";

interface Props {
  image: string;
  altText: string;
  title: string;
  subtitle: string;
}

/* @TODO add test immediate */
const CarouselItem = forwardRef<HTMLDivElement, Props>(
  ({ image, altText, title, subtitle }, ref) => {
    return (
      <Box sx={{ position: "relative" }}>
        <MotionDiv
          ref={ref}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" },
          }}
          exit={{
            opacity: 0,
            transition: { duration: 0.4, ease: "easeIn" },
          }}
        >
          <CardMedia
            component="img"
            image={image}
            alt={altText}
            sx={{
              ...getCarouselHeight(),
              width: "100%",
              objectFit: "cover", // fills container, crops if needed
            }}
          />
          <Stack
            className="typography"
            sx={{
              position: "absolute",
              top: "40%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
              textAlign: "center",
              zIndex: 1,
              width: "96%",
            }}
            gap={1}
          >
            <MotionDiv
              initial={{ opacity: 0, x: -24 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: {
                  delay: 0.5,
                  duration: 0.4,
                  ease: "easeOut",
                },
              }}
            >
              <Typography variant="h1">{title}</Typography>
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, x: 24 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: {
                  delay: 0.6,
                  duration: 0.4,
                  ease: "easeOut",
                },
              }}
            >
              <Typography variant="h4">{subtitle}</Typography>
            </MotionDiv>
          </Stack>
          <CarouselDarkOverlay />
        </MotionDiv>
      </Box>
    );
  },
);

export default CarouselItem;
