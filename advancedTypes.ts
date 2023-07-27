// Example 1: Union Types
function displayValue(value: string | number) {
    console.log(value);
  }
  
  displayValue("Hello"); // Output: "Hello"
  displayValue(42);      // Output: 42
  
  // Example 2: Intersection Types
  interface Person {
    name: string;
  }
  
  interface Employeee {
    employeeId: number;
  }
  
  type EmployeeInfo = Person & Employeee;
  
  const employee: EmployeeInfo = {
    name: "John Doe",
    employeeId: 12345
  };
  
  // Example 3: Tuple Types
  let coordinate: [number, number] = [10, 20];
  console.log(coordinate[0]); // Output: 10
  console.log(coordinate[1]); // Output: 20
  
  // Example 4: Conditional Types
  type UserType<T> = T extends "admin" ? "Administrator" : "User";
  
  let userTypeAdmin: UserType<"admin"> = "Administrator";
  let userTypeUser: UserType<"user"> = "User";
  
  // Example 5: Type Guards
  function displayMessage(value: string | number) {
    if (typeof value === "string") {
      console.log("The value is a string: " + value);
    } else {
      console.log("The value is a number: " + value);
    }
  }
  
  displayMessage("Hello"); // Output: "The value is a string: Hello"
  displayMessage(42);      // Output: "The value is a number: 42"
  
