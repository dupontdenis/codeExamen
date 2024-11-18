// FILE: transform.mjs

import { pizzas, spicy } from "./../data.mjs";

// Function to check if any ingredient is spicy
const isSpicy = (ingredients) =>
  ingredients.some((ingredient) => spicy.includes(ingredient));

// Transform the pizzas array
const temp = pizzas.map((pizza) => ({
  ...pizza,
  spicy: isSpicy(pizza.ingredients),
}));

const groups = Object.groupBy(temp, (pizza) =>
  pizza.spicy ? "Spicy" : "Not Spicy"
);

console.log(JSON.stringify(groups));

// Equivalent of Object.groupBy

// const groupBy = (array, keyFn) => {
//   return array.reduce((result, item) => {
//     const key = keyFn(item);
//     if (!result[key]) {
//       result[key] = [];
//     }
//     result[key].push(item);
//     return result;
//   }, {});
// };

// const groups = groupBy(temp, (pizza) => (pizza.spicy ? "Spicy" : "Not Spicy"));

// transf group into an array
const transformation = Object.entries(groups).map(([key, value]) => ({
  Type: key,
  Pizzas: value.map((pizza) => pizza.name),
}));

console.log(transformation);

export { transformation };
