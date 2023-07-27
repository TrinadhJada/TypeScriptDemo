// Array with Explicit Type
const num: number[] = [1, 2, 3, 4, 5];
const names: string[] = ["Alice", "Bob", "Charlie"];
const boolArray: boolean[] = [true, false, true];

// Array with Array Type Assertion
const mixedArray: any[] = [1, "hello", true];
const unionArray: (number | string)[] = [1, "hello", 2, "world"];

// Array with Array Constructor
const numbersArray: Array<number> = new Array<number>(1, 2, 3, 4, 5);
const namesArray: Array<string> = new Array<string>("Alice", "Bob", "Charlie");

// Readonly Array
const readonlyArray: readonly number[] = [1, 2, 3, 4, 5];

// Tuple
const persons: [string, number] = ["Alice", 30];

// Array-like Object
interface ArrayLikeObject {
  length: number;
  [index: number]: string;
}

const fruit: ArrayLikeObject = { 0: "apple", 1: "banana", 2: "orange", length: 3 };

// Array of Objects
interface person {
  name: string;
  age: number;  
}

const people: person[] = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];
