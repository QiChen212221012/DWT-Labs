let newVar = "I can be updated, but not redeclared in the same scope";
const constantVar = "I cannot change";
console.log(newVar);
console.log(constantVar);

let number = 25; // Number
let name = "Alice"; // String
let isLearning = true; // Boolean
console.log("Number:", number);
console.log("String:", name);
console.log("Boolean:", isLearning);

let sum = 10 + 15; // Arithmetic
let isEqual = 10 == "10"; // Comparison: true
let isExactEqual = 10 === "10"; // Comparison: false
console.log("Arithmetic Operators:");
console.log("Sum:", sum);
console.log("Is Equal (==):", isEqual);
console.log("Is Exact Equal (===):", isExactEqual);

let age = 22; // Replace 25 with your age
let ageInDays = age * 365;
console.log(ageInDays);
let isOlderThan18 = age > 18;
console.log(isOlderThan18);

// Code Challenge 1
let firstName = "John";
let lastName = "Doe";

// Combine the first and last name into a full name using template literals
let fullName = `${firstName} ${lastName}`;

// Print the full name to the console
console.log("Full Name:", fullName);

hello = function () {
  return "Hello World!";
};
console.log(hello());

//Before arrow function
hello = function () {
  return "Hello World!";
};
//After arrow function
hello = () => {
  return "Hello World!";
};
console.log("Traditional Function Output:", hello());
console.log("Arrow Function Output:", hello());

const square = (number) => number * number;
console.log(square(4)); // Outputs: 16

//Code Challenge 2
// Arrow function that doubles each number in an array
let doubleNumbers = (numbers) => numbers.map((number) => number * 2);

// Test the function with an example array
let numbersArray = [1, 2, 3, 4, 5];
let doubledArray = doubleNumbers(numbersArray);

// Print the result
console.log("Original Array:", numbersArray);
console.log("Doubled Array:", doubledArray);

// Arrow function that doubles each number in an array using map

const doubleNumbers = (numbers) => {
  return numbers.map((number) => number * 2);
};

// Test the function
const numbersArray = [1, 2, 3, 4, 5];
const doubledArray = doubleNumbers(numbersArray);

// Output results
console.log("Original Array:", numbersArray);
console.log("Doubled Array:", doubledArray);

const person = {
  firstName: "Pablo",
  lastName: "Salva",
  age: 65, //I’m older than you think.
  greet() {
    console.log("Hello, " + this.firstName);
  },
};
console.log(person.firstName); // Dot notation
console.log(person["lastName"]); // Bracket notation

// Create an object named car with properties and a method
const car = {
  make: "Vauxhall",
  model: "Astra",
  year: 2009,
  displayInfo() {
    console.log(this.make + " " + this.model + " (" + this.year + ")");
  },
};

// Call the displayInfo method to print details
car.displayInfo();

//Code Challenge 3:
// Create an object named student
const student = {
  name: "John Doe",
  course: "Computer Science",
  grades: [85, 90, 78, 92, 88],

  // Method to calculate the average grade
  calculateAverage() {
    let total = this.grades.reduce((sum, grade) => sum + grade, 0); // Sum all grades
    return total / this.grades.length; // Divide by the number of grades
  },
};

// Call the method and print the average grade
console.log("Student Name:", student.name);
console.log("Course:", student.course);
console.log("Grades:", student.grades);
console.log("Average Grade:", student.calculateAverage());

// If-Else statement to check the number
if (number > 0) {
  console.log("The number is positive.");
} else if (number < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}

// Define a variable to test
let day = "Monday"; // You can change this value to test different cases

// Switch statement to check the value of the day
switch (day) {
  case "Monday":
    console.log("It's the start of the week!");
    break;
  case "Wednesday":
    console.log("It's midweek.");
    break;
  case "Friday":
    console.log("The weekend is almost here!");
    break;
  default:
    console.log("It's a regular day.");
}

//Code Challenge 4:
// Define an array of student objects with name and grade
const students = [
  { name: "Alice", grade: 35 },
  { name: "Bob", grade: 42 },
  { name: "Charlie", grade: 50 },
  { name: "Diana", grade: 38 },
  { name: "Edward", grade: 60 },
];

//Final
// Iterate through the array and categorize students
students.forEach((student) => {
  if (student.grade >= 40) {
    console.log(
      `${student.name} has passed the "Dynamic Web Technologies" module with a grade of ${student.grade}.`
    );
  } else {
    console.log(
      `${student.name} has failed the "Dynamic Web Technologies" module with a grade of ${student.grade}.`
    );
  }
});

class Student {
  constructor(name, course, grades) {
    this.name = name;
    this.course = course;
    this.grades = grades;
  }

  averageGrade() {
    let total = 0;

    // simple loop to calculate total
    for (let grade of this.grades) {
      total += grade;
    }

    return total / this.grades.length;
  }

  classify() {
    const average = this.averageGrade();

    if (average >= 40) {
      return "Pass";
    } else {
      return "Fail";
    }
  }
}

// ---- Test the class ----
const student1 = new Student(
  "Qi Chen",
  "Dynamic Web Technologies",
  [77, 87, 93]
);

console.log("Name:", student1.name);
console.log("Course:", student1.course);
console.log("Average:", student1.averageGrade());
console.log("Classification:", student1.classify());
