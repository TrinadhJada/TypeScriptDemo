// Regular Function
function add(a: number, b: number): number {
    return a + b;
  }

  const result = add(5, 10); // Output: 15
  
  // Arrow Function
  const subtract = (a: number, b: number): number => a - b;
  
  const result2 = subtract(10, 5); // Output: 5
  
  // Function with Optional Parameters
  function greets(name: string, age?: number): string {
    if (age) {
      return `Hello, ${name}! You are ${age} years old.`;
    } else {
      return `Hello, ${name}!`;
    }
  }
  
  console.log(greets("Alice")); // Output: "Hello, Alice!"
  console.log(greets("Bob", 30)); // Output: "Hello, Bob! You are 30 years old."
  
  // Function with Default Parameters
  function greeting(name: string, message: string = "Hello"): string {
    return `${message}, ${name}!`;
  }
  
  console.log(greeting("Alice")); // Output: "Hello, Alice!"
  console.log(greeting("Bob", "Hi")); // Output: "Hi, Bob!"
  
  // Function with Rest Parameters
  function sum(...numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
  
  console.log(sum(1, 2, 3, 4, 5)); // Output: 15
  
  // Higher-Order Function -->A nesetd function cannot be called as higherorder function
  function multiplyBy(factor: number): (num: number) => number {
    return (num: number) => num * factor;
  }
  
  const multiplyByTwo = multiplyBy(2);
  console.log(multiplyByTwo(5)); // Output: 10
  
  // Async Function with async/await
  function fetchData(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => resolve("Data fetched!"), 2000);
    });
  }
  
  async function getData(): Promise<void> {
    const result = await fetchData();
    console.log(result); // Output after 2 seconds: "Data fetched!"
  }  
  getData();