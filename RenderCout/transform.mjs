


// FILE: transform.mjs
import { pizzas, prices} from './../data.mjs';


const transformation = pizzas.map((pizza) => {
  const price = pizza.ingredients.reduce((sum, ingredient) => {
    return sum + prices.get(ingredient);
  }, 0);

  return { name: pizza.name, price };
}, []);

console.log(transformation);

export { transformation };
