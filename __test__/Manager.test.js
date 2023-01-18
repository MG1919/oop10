const Manager = require("../library/Manager");

describe("Manager Class", () => {
  it("should be able to take in a officeNumber argument", () => {
    const officeNumber = "666";
    const obj = new Manager("John Smith", "123", "email", officeNumber);

    expect(obj.officeNumber).toBe(officeNumber);
  });

  it("get officeNumber should return officeNumber", () => {
    const officeNumber = "666";
    const obj = new Manager("John Smith", "123", "email", officeNumber);

    expect(obj.getOfficeNumber()).toBe(officeNumber);
  });

  it("get role should return Manager", () => {
    const role = "Manager";
    const obj = new Manager("John Smith", "123", "email", "666");

    expect(obj.getRole()).toBe(role);
  });
});
