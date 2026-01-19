type ConstructorParams = {
  id: number | string;
  name: string;
  description: string;
  price: number;
  image: string;
  ingredients: string[];
  nutrition: string[];
};

class Product {
  id: number | string;
  name: string;
  description: string;
  price: number;
  image: string;
  ingredients: string[];
  nutrition: string[];
  constructor(params: ConstructorParams) {
    this.id = params.id;
    this.name = params.name;
    this.description = params.description;
    this.price = params.price;
    this.image = params.image;
    this.ingredients = params.ingredients;
    this.nutrition = params.nutrition;
  }
}

export default Product;
