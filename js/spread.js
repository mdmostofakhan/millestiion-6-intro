const max = Math.max(23, 32, 12, 22);
console.log(max);

const numbers = [12, 34, 34, 54];
const largets = Math.max(...numbers);
// console.log(largets);
// console.log(...numbers);

const numbers2 = [...numbers];
numbers.push(55);
numbers2.push(77);
console.log(numbers2);
console.log(numbers);



const numbers3 = [...numbers];

const numbers4 = [23, 42, ...numbers, 32]
numbers4.push(90)
console.log(...numbers4);