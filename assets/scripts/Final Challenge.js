// Step 1: Define the Student class
class Student {
  constructor(name, course, grades) {
    this.name = name;
    this.course = course;
    this.grades = grades;
  }

  // Method to calculate average grade
  averageGrade() {
    const total = this.grades.reduce((sum, grade) => sum + grade, 0);
    return total / this.grades.length;
  }
}

// Step 2: Define an array to store student objects
const students = [];

// Step 3: Function to add a new student
function addStudent(name, course, grades) {
  const student = new Student(name, course, grades);
  students.push(student);
  console.log(`Added student: ${name}`);
}

// Step 4: Function to get student details
function getStudentDetails(name) {
  const student = students.find((student) => student.name === name);
  if (student) {
    console.log(`Name: ${student.name}`);
    console.log(`Course: ${student.course}`);
    console.log(`Grades: ${student.grades}`);
    console.log(`Average Grade: ${student.averageGrade().toFixed(2)}`);
  } else {
    console.log(`Student with name ${name} not found.`);
  }
}

// Step 5: Function to categorise students based on their average grade
function categoriseStudents() {
  students.forEach((student) => {
    const avg = student.averageGrade();
    if (avg >= 40) {
      console.log(`${student.name} has passed the course.`);
    } else {
      console.log(`${student.name} has failed the course.`);
    }
  });
}

// Example usage
addStudent("Alice", "Computer Science", [50, 60, 70]);
addStudent("Bob", "Mathematics", [30, 40, 35]);
addStudent("Charlie", "Physics", [45, 50, 55]);

console.log("\nStudent Details:");
getStudentDetails("Alice");

console.log("\nStudent Categorisation:");
categoriseStudents();
