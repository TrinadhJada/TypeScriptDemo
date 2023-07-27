// let abc  =  true;
// console.log(typeof(abc));

// let abc = 123;
// console.log(typeof(abc));

// let abc = 'assdc';
// console.log(typeof(abc));

interface person {
    name: string;
    age: number;
  }
  
  const peoples: person[] = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 },
  ];

  interface human {
    name: string;
    age: number;
  }
  
  // Multi-dimensional array of Person objects
  const being: human[][] = [
    [
      { name: "John", age: 30 },
      { name: "Alice", age: 25 },
      { name: "Bob", age: 40 }
    ],
    [
      { name: "Eve", age: 22 },
      { name: "Michael", age: 35 },
      { name: "Olivia", age: 28 }
    ],
    [
      { name: "Sophia", age: 29 },
      { name: "David", age: 27 },
      { name: "Emma", age: 32 }
    ]
  ];
  
  console.log(being[0][1]); // Output: { name: "Alice", age: 25 }
  console.log(being[2][2]); // Output: { name: "Emma", age: 32 }
  
  // let x : string = 12


  const per = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  for (const prop in per) {
    console.log(`${prop}: ${per[prop]}`);
  }
  