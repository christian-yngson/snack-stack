import Card from "@/components/common/MotionCard";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

interface Props {
  name: string;
  description: string;
  image: string;
}

function DishCategoryCard({ name, description, image }: Props) {
  return (
    <Card
      sx={{
        height: "100%",
        maxWidth: 345,
        borderRadius: 4,
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
        rotate: 0.4,
      }}
      transition={{
        type: "spring",
        stiffness: 280,
        damping: 18,
      }}
    >
      <CardActionArea sx={{ height: "100%" }}>
        <CardMedia component="img" height="200" image={image} alt={name} />
        <CardContent sx={{ height: "100%" }}>
          <Typography gutterBottom variant="h5">
            {name}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default DishCategoryCard;
