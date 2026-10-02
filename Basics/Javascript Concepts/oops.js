// Encapsulation: Bundling the data (properties) and behavior (methods) together in one unit (object).
// It also involves restricting access to some of the object's components (private/protected members).
class Employee {
  constructor(name, salary) {
    this.name = name; // Public property
    let _salary = salary; // Private property (simulated)

    // Public method to access private property
    this.getSalary = function () {
      return _salary;
    };

    // Public method to update salary
    this.setSalary = function (newSalary) {
      if (newSalary > 0) {
        _salary = newSalary;
        console.log(`${this.name}'s salary updated to $${_salary}`);
      } else {
        console.log("Invalid salary amount");
      }
    };
  }

  // Public method
  displayInfo() {
    console.log(`${this.name}'s salary is $${this.getSalary()}`);
  }
}

// Inheritance: Creating a new class (Manager) that inherits properties and methods from Employee
class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary); // Call the constructor of the parent (Employee) class
    this.department = department; // New property specific to Manager
  }

  // Method overriding (Polymorphism)
  displayInfo() {
    console.log(
      `${this.name}, Manager of ${
        this.department
      } department, earns $${this.getSalary()}`
    );
  }

  // Manager-specific method
  holdMeeting() {
    console.log(
      `${this.name} is holding a meeting in the ${this.department} department.`
    );
  }
}

// Polymorphism: Method Overriding
class Developer extends Employee {
  constructor(name, salary, programmingLanguage) {
    super(name, salary);
    this.programmingLanguage = programmingLanguage;
  }

  // Overriding the displayInfo method
  displayInfo() {
    console.log(
      `${this.name}, Developer proficient in ${
        this.programmingLanguage
      }, earns $${this.getSalary()}`
    );
  }

  // Developer-specific method
  code() {
    console.log(`${this.name} is coding in ${this.programmingLanguage}.`);
  }
}

// Abstraction: Hiding the complexity from the user by providing a simple interface
// BankAccount class hides the complex logic of managing account balance
class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    let _balance = balance; // Private property

    // Public method to interact with the private balance
    this.getBalance = function () {
      return _balance;
    };

    this.deposit = function (amount) {
      if (amount > 0) {
        _balance += amount;
        console.log(
          `${this.owner} deposited $${amount}. New balance: $${_balance}`
        );
      } else {
        console.log("Deposit amount must be positive.");
      }
    };

    this.withdraw = function (amount) {
      if (amount > 0 && amount <= _balance) {
        _balance -= amount;
        console.log(
          `${this.owner} withdrew $${amount}. New balance: $${_balance}`
        );
      } else {
        console.log("Insufficient funds or invalid amount.");
      }
    };
  }
}

// Encapsulation and Inheritance Example
const employee1 = new Employee("John", 50000);
employee1.displayInfo(); // John’s salary is $50000
employee1.setSalary(55000); // John’s salary updated to $55000
employee1.displayInfo(); // John’s salary is $55000

const manager1 = new Manager("Alice", 80000, "HR");
manager1.displayInfo(); // Alice, Manager of HR department, earns $80000
manager1.holdMeeting(); // Alice is holding a meeting in the HR department.

const developer1 = new Developer("Bob", 70000, "JavaScript");
developer1.displayInfo(); // Bob, Developer proficient in JavaScript, earns $70000
developer1.code(); // Bob is coding in JavaScript.

// Abstraction Example
const bankAccount1 = new BankAccount("Titas", 1000);
bankAccount1.deposit(500); // Titas deposited $500. New balance: $1500
bankAccount1.withdraw(300); // Titas withdrew $300. New balance: $1200
console.log(bankAccount1.getBalance()); // 1200

// Trying to access private balance directly would result in undefined
// console.log(bankAccount1._balance); // undefined
