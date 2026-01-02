import ClassicBurgerImage from "@/assets/images/food/burgers/classic-burger.avif";
import CheeseburgerImage from "@/assets/images/food/burgers/cheeseburger.avif";
import BaconBurgerImage from "@/assets/images/food/burgers/bacon-burger.avif";
import VeggieBurgerImage from "@/assets/images/food/burgers/veggie-burger.avif";

const getBurgers = () => {
  return [
    {
      id: 5,
      name: "Classic Burger",
      description:
        "A juicy beef patty grilled to perfection and served with fresh lettuce, tomato, and pickles. A timeless favorite that satisfies every burger craving.",
      price: 10,
      image: ClassicBurgerImage,
    },
    {
      id: 6,
      name: "Cheeseburger",
      description:
        "Melted cheddar blankets a succulent beef patty, complemented by crisp lettuce and ripe tomato. Every bite is cheesy, savory, and utterly satisfying.",
      price: 11,
      image: CheeseburgerImage,
    },
    {
      id: 7,
      name: "Bacon Burger",
      description:
        "Crispy smoked bacon tops a flavorful beef patty with melted cheese, lettuce, and tomato. Smoky, savory, and indulgent, it’s a burger for true flavor lovers.",
      price: 12,
      image: BaconBurgerImage,
    },
    {
      id: 8,
      name: "Veggie Burger",
      description:
        "A hearty plant-based patty served with fresh greens, tomato, and avocado. Packed with flavor and satisfying for both vegetarians and burger fans alike.",
      price: 11,
      image: VeggieBurgerImage,
    },
  ] as const;
};
export default getBurgers;
