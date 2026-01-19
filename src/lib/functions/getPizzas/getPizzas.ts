import HawaiianPizzaImage from "@/assets/images/food/pizza/hawaiian-pizza.avif";
import PepperoniPizzaImage from "@/assets/images/food/pizza/pepperoni-pizza.avif";
import VeggiePizzaImage from "@/assets/images/food/pizza/veggie-pizza.avif";
import BBQChickenPizzaImage from "@/assets/images/food/pizza/bbq-chicken-pizza.avif";

/* This will be moved to an API later */

const getPizzas = () => {
  return [
    {
      id: 1,
      name: "Hawaiian Pizza",
      description:
        "A classic combination of savory ham and sweet pineapple layered over rich tomato sauce. Melted mozzarella brings everything together with a perfect balance of salty and sweet.",
      price: 12,
      image: HawaiianPizzaImage,
      ingredients: [
        "Pizza Dough",
        "Tomato Sauce",
        "Mozzarella Cheese",
        "Ham",
        "Pineapple",
      ],
      nutrition: [
        "🔥 260 kcal",
        "💪 12g protein",
        "🍞 30g carbs",
        "🧈 10g fat",
      ],
    },
    {
      id: 2,
      name: "Pepperoni Pizza",
      description:
        "Loaded with spicy pepperoni slices and gooey mozzarella over a rich tomato base. Each bite delivers a bold, savory flavor that never disappoints.",
      price: 13,
      image: PepperoniPizzaImage,
      ingredients: [
        "Pizza Dough",
        "Tomato Sauce",
        "Mozzarella Cheese",
        "Pepperoni",
      ],
      nutrition: [
        "🔥 300 kcal",
        "💪 14g protein",
        "🍞 32g carbs",
        "🧈 14g fat",
      ],
    },
    {
      id: 3,
      name: "Veggie Pizza",
      description:
        "A colorful mix of fresh bell peppers, mushrooms, and olives on a cheesy tomato base. Crisp vegetables and melted mozzarella create a light yet satisfying pizza.",
      price: 11,
      image: VeggiePizzaImage,
      ingredients: [
        "Pizza Dough",
        "Tomato Sauce",
        "Mozzarella Cheese",
        "Bell Peppers",
        "Mushrooms",
        "Olives",
        "Onions",
      ],
      nutrition: ["🔥 230 kcal", "💪 10g protein", "🍞 34g carbs", "🧈 8g fat"],
    },
    {
      id: 4,
      name: "BBQ Chicken Pizza",
      description:
        "Tender chicken pieces smothered in smoky BBQ sauce and topped with mozzarella and red onions. Sweet and savory flavors combine for a truly irresistible pizza.",
      price: 14,
      image: BBQChickenPizzaImage,
      ingredients: [
        "Pizza Dough",
        "BBQ Sauce",
        "Mozzarella Cheese",
        "Grilled Chicken",
        "Red Onions",
      ],
      nutrition: [
        "🔥 290 kcal",
        "💪 18g protein",
        "🍞 31g carbs",
        "🧈 11g fat",
      ],
    },
  ] as const;
};

export default getPizzas;
