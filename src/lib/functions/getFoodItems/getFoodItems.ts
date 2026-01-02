import getPizzas from "../getPizzas";
import getBurgers from "../getBurgers";
import getVeggies from "../getVeggies";

/* This will be moved to an API later */

const getFoodItems = () => {
  return [...getPizzas(), ...getBurgers(), ...getVeggies()];
};

export default getFoodItems;
