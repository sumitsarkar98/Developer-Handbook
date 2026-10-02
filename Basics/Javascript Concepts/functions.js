// 1. **Function Declaration (Named Function)**

function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Alice"); // Outputs: Hello, Alice!

// 2. **Function Expression (Anonymous Function)**

const add = function (a, b) {
  return a + b;
};

console.log(add(2, 3)); // Outputs: 5

// 3. **Arrow Function Expression**

const multiply = (a, b) => a * b;

console.log(multiply(3, 4)); // Outputs: 12

// 4. **Immediately Invoked Function Expression (IIFE)**

(function () {
  const message = "I am an IIFE!";
  console.log(message);
})();
// Outputs: I am an IIFE!

// Note: message is not accessible outside the IIFE

// 5. **Anonymous Function as Callback**

setTimeout(function () {
  console.log("This is a callback function.");
}, 1000);
// Outputs after 1 second: This is a callback function.

// 6. **Named Function Expression**

const divide = function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero!";
  }
  return a / b;
};

console.log(divide(10, 2)); // Outputs: 5
console.log(divide(10, 0)); // Outputs: Cannot divide by zero!

// 7. **Constructor Function (used with 'new' keyword)**

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("John", 30);
console.log(person1.name); // Outputs: John
console.log(person1.age); // Outputs: 30

// 8. **Generator Function (using the function* syntax)**

function* countUp() {
  let count = 1;
  while (true) {
    yield count;
    count++;
  }
}

const counter = countUp();
console.log(counter.next().value); // Outputs: 1
console.log(counter.next().value); // Outputs: 2
console.log(counter.next().value); // Outputs: 3

// 9. **Async Function (returns a promise)**

async function fetchData() {
  return "Data fetched!";
}

fetchData().then((result) => {
  console.log(result); // Outputs: Data fetched!
});

// 10. **Callback Function**

function processData(data, callback) {
  const processedData = data * 2;
  callback(processedData);
}

processData(5, function (result) {
  console.log("Processed Data:", result); // Outputs: Processed Data: 10
});
