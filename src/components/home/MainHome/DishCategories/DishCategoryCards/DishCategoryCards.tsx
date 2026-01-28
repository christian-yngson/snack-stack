import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import DishCategoryCard from "./DishCategoryCard";
import Container from "@mui/material/Container";
import Burger from "@/assets/images/home/dish-categories/burger.jpg";
import Pizza from "@/assets/images/home/dish-categories/pizza.jpg";
import Seafood from "@/assets/images/home/dish-categories/seafood.jpg";
import Dessert from "@/assets/images/home/dish-categories/dessert.jpg";

/* @TODO add test after API */
function DishCategoryCards() {
  const categories = [
    {
      name: "Burger",
      description:
        "Over 30 mouth-watering burger options with fresh ingredients.",
      image: Burger,
    },
    {
      name: "Pizza",
      description:
        "Choose from 40+ delicious pizzas with a variety of toppings.",
      image: Pizza,
    },
    {
      name: "Seafood",
      description:
        "Enjoy more than 25 fresh seafood dishes from around the world.",
      image: Seafood,
    },
    {
      name: "Dessert",
      description:
        "More than 50 delicious dessert options to satisfy your sweet tooth.",
      image: Dessert,
    },
  ];
  return (
    <Container maxWidth="lg">
      <List
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {categories.map((category) => (
          <ListItem
            key={category.name}
            sx={{
              width: { xs: "100%", sm: "50%", md: "25%" },
              display: "flex",
              justifyContent: "center",
              p: 2,
            }}
          >
            <DishCategoryCard
              name={category.name}
              description={category.description}
              image={category.image}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default DishCategoryCards;
