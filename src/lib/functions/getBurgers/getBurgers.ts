import ClassicBurgerImage from "@/assets/images/food/burgers/classic-burger.avif";
import CheeseburgerImage from "@/assets/images/food/burgers/cheeseburger.avif";
import BaconBurgerImage from "@/assets/images/food/burgers/bacon-burger.avif";
import VeggieBurgerImage from "@/assets/images/food/burgers/veggie-burger.avif";

/* This will be moved to an API later */

const getBurgers = () => {
  return [
    {
      id: 5,
      name: "Classic Burger",
      description:
        "A juicy beef patty grilled to perfection and served with fresh lettuce, tomato, and pickles. A timeless favorite that satisfies every burger craving.",
      price: 10,
      image: ClassicBurgerImage,
      ingredients: [
        "Burger Bun",
        "Beef Patty",
        "Lettuce",
        "Tomato",
        "Pickles",
        "Burger Sauce",
      ],
      nutrition: [
        "🔥 420 kcal",
        "💪 25g protein",
        "🍞 38g carbs",
        "🧈 22g fat",
      ],
    },
    {
      id: 6,
      name: "Cheeseburger",
      description:
        "Melted cheddar blankets a succulent beef patty, complemented by crisp lettuce and ripe tomato. Every bite is cheesy, savory, and utterly satisfying.",
      price: 11,
      image: CheeseburgerImage,
      ingredients: [
        "Burger Bun",
        "Beef Patty",
        "Cheddar Cheese",
        "Lettuce",
        "Tomato",
        "Burger Sauce",
      ],
      nutrition: [
        "🔥 460 kcal",
        "💪 27g protein",
        "🍞 38g carbs",
        "🧈 26g fat",
      ],
    },
    {
      id: 7,
      name: "Bacon Burger",
      description:
        "Crispy smoked bacon tops a flavorful beef patty with melted cheese, lettuce, and tomato. Smoky, savory, and indulgent, it’s a burger for true flavor lovers.",
      price: 12,
      image: BaconBurgerImage,
      ingredients: [
        "Burger Bun",
        "Beef Patty",
        "Cheddar Cheese",
        "Smoked Bacon",
        "Lettuce",
        "Tomato",
        "Burger Sauce",
      ],
      nutrition: [
        "🔥 520 kcal",
        "💪 30g protein",
        "🍞 39g carbs",
        "🧈 32g fat",
      ],
    },
    {
      id: 8,
      name: "Veggie Burger",
      description:
        "A hearty plant-based patty served with fresh greens, tomato, and avocado. Packed with flavor and satisfying for both vegetarians and burger fans alike.",
      price: 11,
      image: VeggieBurgerImage,
      ingredients: [
        "Burger Bun",
        "Plant-Based Patty",
        "Lettuce",
        "Tomato",
        "Avocado",
        "Vegan Sauce",
      ],
      nutrition: [
        "🔥 380 kcal",
        "💪 18g protein",
        "🍞 42g carbs",
        "🧈 16g fat",
      ],
    },
  ];
};

export default getBurgers;
