// 1. Arrow function
const add = (a, b) => a + b;
console.log("1. Arrow function:", add(2, 3));

// 2. Object destructuring
const user = { name: "Alice", age: 25 };
const { name, age } = user;
console.log("2. Object destructuring:", name, age);

// 3. Array destructuring
const nums = [10, 20, 30];
const [x, y, z] = nums;
console.log("3. Array destructuring:", x, y, z);

// 4. Spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log("4. Spread operator:", arr2);

// 5. Rest parameters
const sumAll = (...numbers) => numbers.reduce((a, b) => a + b, 0);
console.log("5. Rest parameters:", sumAll(1, 2, 3, 4, 5));

// 6. Template literals
const greeting = (user) => `Hello, ${user}!`;
console.log("6. Template literals:", greeting("Bob"));

// 7. Default parameters
const multiply = (a, b = 2) => a * b;
console.log("7. Default parameters:", multiply(5));

// 8. Enhanced object literals
const person = "Charlie";
const age2 = 30;
const obj = { person, age2, greet() { return `Hi, I’m ${this.person}`; } };
console.log("8. Enhanced object literals:", obj.greet());

// 9. Map method
const numbers = [1, 2, 3, 4];
const squares = numbers.map(n => n * n);
console.log("9. Map:", squares);

// 10. Filter method
const evens = numbers.filter(n => n % 2 === 0);
console.log("10. Filter:", evens);

// 11. Reduce method
const total = numbers.reduce((a, b) => a + b, 0);
console.log("11. Reduce:", total);

// 12. for...of loop
for (const n of numbers) {
  console.log("12. for...of loop value:", n);
}

// 13. for...in loop
const car = { brand: "Toyota", model: "Corolla" };
for (const key in car) {
  console.log("13. for...in loop:", key, car[key]);
}

// 14. Set
const unique = new Set([1, 2, 2, 3, 4]);
console.log("14. Set:", [...unique]);

// 15. Map object
const map = new Map();
map.set("name", "David");
map.set("age", 40);
console.log("15. Map object:", map.get("name"), map.get("age"));

// 16. Optional chaining
const user2 = { profile: { email: "test@mail.com" } };
console.log("16. Optional chaining:", user2.profile?.email);

// 17. Nullish coalescing
const value = null ?? "Default value";
console.log("17. Nullish coalescing:", value);

// 18. Async/Await
const fetchData = async () => {
  return "Data fetched";
};
fetchData().then(data => console.log("18. Async/Await:", data));

// 19. Promise
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
delay(500).then(() => console.log("19. Promise resolved after 0.5s"));

// 20. Class with inheritance
class Animal {
  speak() { return "Animal sound"; }
}
class Dog extends Animal {
  speak() { return "Bark!"; }
}
const dog = new Dog();
console.log("20. Class Inheritance:", dog.speak());
