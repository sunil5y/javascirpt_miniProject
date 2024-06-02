// Tasks
// 1. Promises
// Create a function fetchData that simulates fetching data from an API. The function should
// return a promise that resolves with a hardcoded array of objects after 2 seconds. Each object
// should represent a user with properties id, name, and age.
function fetchData() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          const users = [
              { id: 1, name: 'Sunil', age: 22 },
              { id: 2, name: 'Mandip', age: 100 },
              { id: 3, name: 'Sudersah', age: 105 }
          ];
          resolve(users);
      }, 2000);
  });
}

fetchData().then(data => console.log(data));

// 2. Closures
// Create a function createCounter that returns an object with two methods: increment and
// getCount. The increment method should increase the internal count by 1, and the getCount
// method should return the current count. Use a closure to maintain the internal count variable.
function createCounter() {
  let count = 0;
  return {
      increment: function() {
          count++;
      },
      getCount: function() {
          return count;
      }
  };
}
const counter = createCounter();
counter.increment();
console.log(counter.getCount()); 

// 3. Callbacks
// Create a function processData that accepts an array of numbers and a callback function. The
// function should process each number in the array using the callback function and return a
// new array of processed numbers.
function processData(numbers, callback) {
  return numbers.map(callback);
}
const numbers = [10, 50, 100, 200];
const processed = processData(numbers, num => num * 2);
console.log(processed);

// 4. Async/Await
// Rewrite the fetchData function from Question 1 using async and await.
async function fetchData() {
  return new Promise((resolve) => {
      setTimeout(() => {
          const users = [
              { id: 1, name: 'Sunil', age: 22 },
              { id: 2, name: 'Mandip', age: 100 },
              { id: 3, name: 'Sudershan', age: 105 }
          ];
          resolve(users);
      }, 2000);
  });
}
(async () => {
  const data = await fetchData();
  console.log(data);
})();

// 5. Array Manipulation: Map
// Given an array of numbers, create a function that doubles each number using map.
function doubleNumbers(numbers) {
  return numbers.map(num => num * 2);
}
const number=[10, 20, 30, 40];
console.log(doubleNumbers(number)); 

// 6. Array Manipulation: Filter
// Given an array of numbers, create a function that filters out numbers less than 10 using filter.
function filtersNumbers(numbers) {
  return numbers.filter(num => num < 10);
}
const number1=[5, 8, 6, 11];
console.log(filtersNumbers(number1)); 
// 7. Array Manipulation: Find
// Given an array of numbers, create a function that finds the first number greater than 15 using
// find.
function findsNumbers(numbers) {
  return numbers.find(num => num >15);
}
const number2=[10,20,30,40,50,60,70];
console.log(findsNumbers(number2));
// 8. Array Manipulation: Reduce
// Given an array of numbers, create a function that sums all numbers using reduce.
function sumNumbers(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}
const arr=[5, 6, 7, 9]
console.log(sumNumbers(arr)); 

// 9. Object Manipulation
// Given an array of user objects, write a function to transform this array into an object where the
// keys are user IDs and the values are the corresponding user objects.
function transformToUserObject(users) {
  return users.reduce((obj, user) => {
      obj[user.id] = user;
      return obj;
  }, {});
}

const usersArray = [
  { id: 1, name: 'Ajay', age: 25 },
  { id: 2, name: 'Ram', age: 30 },
  { id: 3, name: 'Mohan', age: 35 }
];
console.log(transformToUserObject(usersArray));


// 10. Classes and Objects
// Create a Person class with a constructor that accepts name and age parameters. Add a
// method describe that returns a string describing the person.
class Person {
  constructor(name, age) {
      this.name = name;
      this.age = age;
  }

  describe() {
      return `Name: ${this.name}, Age: ${this.age}`;
  }
}
const person = new Person('Sunil', 25);
console.log(person.describe()); 

// 11. Inheritance
// Create a Student class that extends Person and adds a grade property. Add a method study
// that returns a string indicating the student is studying.
class Person {
  constructor(name, age) {
      this.name = name;
      this.age = age;
  }

  describe() {
      return `Name: ${this.name}, Age: ${this.age}`;
  }
}

class Student extends Person {
  constructor(name, age, grade) {
      super(name, age);
      this.grade = grade;
  }

  study() {
      return `${this.name} is studying.`;
  }
}
const student = new Student('Sunil', 20, 'A');
console.log(student.describe()); 
console.log(student.study()); 

// 12. Error Handling with Promises
// Modify the fetchData function to randomly reject the promise with an error message &quot;Failed to
// fetch data&quot;. Handle this error using .catch when calling the function.
function fetchData() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          if (Math.random() > 0.5) {
              const users = [
                  { id: 1, name: 'Sunil', age: 25 },
                  { id: 2, name: 'Mandip', age: 30 },
                  { id: 3, name: 'Prashun', age: 35 }
              ];
              resolve(users);
          } else {
              reject("Failed to fetch data");
          }
      }, 2000);
  });
}

fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error));

// 13. Error Handling with Async/Await
// Modify the fetchData function with async/await to handle errors using try/catch blocks.
async function fetchData() {
  try {
      const data = await new Promise((resolve, reject) => {
          setTimeout(() => {
              if (Math.random() > 0.5) {
                  const users = [
                      { id: 1, name: 'Kotafactory', age: 25 },
                      { id: 2, name: 'susan', age: 30 },
                      { id: 3, name: 'Sunil', age: 35 }
                  ];
                  resolve(users);
              } else {
                  reject("Failed to fetch data");
              }
          }, 2000);
      });
      console.log(data);
  } catch (error) {
      console.error(error);
  }
}

fetchData();

// 14. Complex Array Manipulation
// Given an array of users, where each user has a name and an array of hobbies, create a
// function that returns an array of all unique hobbies using reduce.
function getUniqueHobbies(users) {
  return users.reduce((allHobbies, user) => {
      user.hobbies.forEach(hobby => {
          if (!allHobbies.includes(hobby)) {
              allHobbies.push(hobby);
          }
      });
      return allHobbies;
  }, []);
}
const users = [
  { name: 'Sunil', hobbies: ['reading', 'biking', 'cooking'] },
  { name: 'Mandip', hobbies: ['cooking', 'hiking'] },
  { name: 'Susan', hobbies: ['biking', 'dancing'] }
];
console.log(getUniqueHobbies(users)); 
