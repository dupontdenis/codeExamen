

export const pizzas = [
  { name: "queen", ingredients: ["🐷", "🍄", "🍅", "🧀"] },
  { name: "cheese", ingredients: ["🧀", "🍅"] },
  { name: "oriental", ingredients: ["🍅", "🐑", "🍄", "🌶"] },
  { name: "royal", ingredients: ["🍅", "🌵"] },
];
const headers = Object.keys(pizzas[0]);
console.log(pizzas[0].ingredients); // [ '🐷', '🍄', '🍅', '🧀' ]
console.log(`${pizzas[0].ingredients}`); //  '🐷', '🍄', '🍅', '🧀' 
console.log(typeof pizzas[0].ingredients); // 
console.log(typeof `${pizzas[0].ingredients}`); 

console.log(
  `${headers.map((header) => `${header}: ${pizzas[0][header]}`).join(", ")}`
); // name: queen, ingredients: 🐷,🍄,🍅,🧀

const numbers = [1, 2, 3, 4, 5];
console.log(numbers) // [1,2,3,4,5]
console.log(`${numbers}`) // 1,2,3,4,5