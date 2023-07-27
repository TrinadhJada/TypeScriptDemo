interface Person {
    name: string;
    age: number;
    isStudent?: boolean; // Optional property
    readonly id: number; // Readonly property
  }
  
  function displayPersonInfo(person: Person) {
    console.log(`Name: ${person.name}, Age: ${person.age}`);
  }
  
  const trinadh: Person = {
    name: "Trinadh",
    age: 30,
    id: 12345,
  };
  
  displayPersonInfo(trinadh); // Output: "Name: Trinadh, Age: 30"
  
  trinadh.name = "John Doe"; 
  // john.id = 56789; // Error, id is readonly and cannot be modified
  