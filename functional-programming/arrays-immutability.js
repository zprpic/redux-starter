const numbers = [1, 2, 3];

// Adding
// const added = [...numbers, 4];
const index = numbers.indexOf(2);
const added = [...numbers.slice(0, index), 4, ...numbers.slice(index)];

console.log(added);

// Removing
const removed = numbers.filter((number) => number !== 2);
console.log(removed);

// Updating
const updated = numbers.map((number) => (n === 2 ? 20 : number));
console.log(updated);
