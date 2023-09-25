//TASK1


function Person(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  
  
  function Employee(name, age, address, department, designation, salary) {
    Person.call(this, name, age, address);
    this.department = department;
    this.designation = designation;
    this.salary = salary;
  }
  
  
  function Student(name, age, address, studentId, courses) {
    Person.call(this, name, age, address);
    this.studentId = studentId;
    this.courses = courses;
  }
  
  
  function Teacher(name, age, address, department, designation, salary, subject) {
    Employee.call(this, name, age, address, department, designation, salary);
    this.subject = subject;
  }
  function Staff(name, age, address, department, designation, salary, role) {
    Employee.call(this, name, age, address, department, designation, salary);
    this.role = role;
  }
  
  
  function Courses(courseName) {
    this.courseName = courseName;
  }
  
  
  const student1 = new Student("ayesha ", 20, "123 Main St", "S001", ["Math", "Science"]);
  const student2 = new Student("saba", 22, "456 Elm St", "S002", ["History", "English"]);
  
  const teacher1 = new Teacher("kamran", "789 Oak St", "Math", "Professor", 50000, "Algebra");
  const teacher2 = new Teacher("Dr awan", 40, "101 Pine St", "Science", "Associate Professor", 60000, "Biology");
  
  const staff1 = new Staff("ali", 30, "222 Cedar St", "Admin", "Clerk", 35000, "Admin Assistant");
  const staff2 = new Staff("sohaib",28, "333 Birch St", "HR", "HR Manager", 45000, "HR Coordinator");
  console.log("Student 1:", student1);
  console.log("Student 2:", student2);
  
  console.log("Teacher 1:", teacher1);
  console.log("Teacher 2:", teacher2);
  
  console.log("Staff 1:", staff1);
  console.log("Staff 2:", staff2);
  
  //TASK2
  class Employee {
    constructor(name = "", dept = "general", address = "") {
      this.name = name;
      this.dept = dept;
      this.address = address;
    }
  }
  
  class Manager extends Employee {
    constructor(name = "", dept = "general", address = "") {
      super(name, dept, address);
      this.reports = [];
    }
  }
  
  class WorkerBee extends Employee {
    constructor(name = "", dept = "general", address = "") {
      super(name, dept, address);
      this.projects = [];
    }
  }
  class SalesPerson extends WorkerBee {
    constructor(name = "", address = "") {
      super(name, "sales", address);
      this.quota = 100;
    }
  }
  
  class Engineer extends WorkerBee {
    constructor(name = "", address = "") {
      super(name, "engineering", address);
      this.machine = "";
    }
  }
  
  const employee1 = new Employee("Muhammad Ali", "general", "Gulshan-e-Iqbal, Karachi");
  const manager1 = new Manager("Fatima Ahmed", "general", "DHA, Lahore");
  const workerBee1 = new WorkerBee("Ahmed Khan", "general", "F-7, Islamabad");
  const salesPerson1 = new SalesPerson("Aisha Malik", "F-6, Islamabad");
  const engineer1 = new Engineer("Usman Khan", "general", "Clifton, Karachi");
  
  console.log("Employee 1:", employee1);
  console.log("Manager 1:", manager1);
  console.log("WorkerBee 1:", workerBee1);
  console.log("SalesPerson 1:", salesPerson1);
  console.log("Engineer 1:", engineer1);