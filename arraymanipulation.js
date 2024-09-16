let fruits = ['apple', 'banana', 'orange'];
console.log("Initial Array:", fruits);

fruits.push('grape');
console.log("After push:", fruits);

fruits.pop();
console.log("After pop:", fruits);


let numbers = [3, 1, 5, 2, 4];
console.log("Initial Array:", numbers);

numbers.sort();
console.log("After sort (ascending order):", numbers);


numbers = [3, 1, 5, 2, 4];
console.log("Initial Array:", numbers);

let doubledNumbers = numbers.map(num => num * 2);
console.log("After map (doubled numbers):", doubledNumbers);

let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("After filter (even numbers):", evenNumbers);

let sum = numbers.reduce((total, num) => total + num, 0);
console.log("Sum of numbers:", sum);