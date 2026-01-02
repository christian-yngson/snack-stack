import CaesarSaladImage from "@/assets/images/food/vegetarian/caesar-salad.avif";
import GreekSaladImage from "@/assets/images/food/vegetarian/greek-salad.avif";

/* This will be moved to an API later */
const getVeggies = () => {
  return [
    {
      id: 9,
      name: "Caesar Salad",
      description:
        "Crisp romaine lettuce tossed with creamy Caesar dressing, crunchy croutons, and shaved Parmesan. A classic salad that's both refreshing and indulgent.",
      price: 9,
      image: CaesarSaladImage,
    },
    {
      id: 10,
      name: "Greek Salad",
      description:
        "Juicy tomatoes, cucumbers, red onions, olives, and feta cheese tossed in a light vinaigrette. Bursting with Mediterranean flavors, it's fresh, tangy, and satisfying.",
      price: 10,
      image: GreekSaladImage,
    },
  ];
};

export default getVeggies;
