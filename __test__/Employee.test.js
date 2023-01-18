const Employee = require ("../library/Employee")

describe("Employee Class", () => {
  it("should take in a name argument", () => {
    const name = "John Smith"
    const obj = new Employee(name);

    expect(obj.name).toBe(name);
  });
  it("should take in an id argument", () => {
    const id = "123"
    const obj = new Employee("John Smith", id);

    expect(obj.id).toBe(id);
  });
  it("should take in an email argument", () => {
    const email = "john@gmail.com"
    const obj = new Employee("John Smith", "123", email);

    expect(obj.email).toBe(email);
  });
  
  it("get name should return name", () => {
    const name = "John Smith";
    const obj = new Employee(name);

    expect(obj.getName()).toBe(name);
  });
  it("get id should return id", () => {
    const id = "123";
    const obj = new Employee("John Smith", id);

    expect(obj.getId()).toBe(id);
  });
  it("get email should return email", () => {
    const email = "john@gmail.com";
    const obj = new Employee("John Smith", "123", email);

    expect(obj.getEmail()).toBe(email);
  });
  
  it("get role should return Employee", () => {
    const role = "Employee";
    const obj = new Employee("John Smith", "123", "email");

    expect(obj.getRole()).toBe(role);
  });
  
});