// 1. for loop: Print numbers from 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// 2. while loop: Print numbers from 1 to 5
let j = 1;
while (j <= 5) {
  console.log(j);
  j++;
}

// 3. do-while loop: Print numbers from 1 to 5
let k = 1;
do {
  console.log(k);
  k++;
} while (k <= 5);

// 4. for...of loop: Iterate over an array
const numbers = [1, 2, 3, 4, 5]; //i<numbers.length()
for (const num of numbers) {
  console.log(num);
}

// 5. for...in loop: Iterate over the properties of an object
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

for (const prop in person) {
  console.log(`${prop}: ${person[prop]}`);
}

// 6. forEach() method: Iterate over an array using forEach() method
const fruits = ["apple", "banana", "orange"];
fruits.forEach((fruit) => {
  console.log(fruit);
});
