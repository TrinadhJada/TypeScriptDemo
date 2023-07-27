class individual {
    private name: string;
    private age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    public introduce() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  
    private canVote() {
      return this.age >= 18;
    }
  }
  
  const person1 = new individual("Alice", 25);
  person1.introduce(); // Output: "Hello, my name is Alice and I am 25 years old."
  
  // Attempting to access private members (name and canVote) will result in errors:

  // console.log(person1.name); // Error: Property 'name' is private and only accessible within class 'Individual'.
  // console.log(person1.canVote()); // Error: Property 'canVote' is private and only accessible within class 'Individual'.
  