const getCategoryOptions = () => {
  return [
    { value: "all", label: "Show all" },
    { value: "pizzas", label: "Pizzas" },
    { value: "burgers", label: "Burgers" },
    { value: "desserts", label: "Desserts" },
  ] as const;
};

export default getCategoryOptions;
