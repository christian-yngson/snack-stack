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
      ingredients: [
        "Romaine Lettuce",
        "Caesar Dressing",
        "Croutons",
        "Parmesan Cheese",
      ],
      nutrition: ["🔥 320 kcal", "💪 9g protein", "🍞 26g carbs", "🧈 22g fat"],
    },
    {
      id: 10,
      name: "Greek Salad",
      description:
        "Juicy tomatoes, cucumbers, red onions, olives, and feta cheese tossed in a light vinaigrette. Bursting with Mediterranean flavors, it's fresh, tangy, and satisfying.",
      price: 10,
      image: GreekSaladImage,
      ingredients: [
        "Tomatoes",
        "Cucumbers",
        "Red Onions",
        "Kalamata Olives",
        "Feta Cheese",
        "Olive Oil Vinaigrette",
      ],
      nutrition: ["🔥 280 kcal", "💪 8g protein", "🍞 20g carbs", "🧈 21g fat"],
    },
  ] as const;
};

export default getVeggies;
