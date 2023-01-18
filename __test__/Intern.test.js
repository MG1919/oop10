const Intern = require("../library/Intern");

describe("Intern Class", () => {
  it("should be able to take in a schoolName argument", () => {
    const schoolName = "Denver University";
    const obj = new Intern("John Smith", "123", "email", schoolName);

    expect(obj.schoolName).toBe(schoolName);
  });

  it("get schoolName should return schoolName", () => {
    const schoolName = "Denver University";
    const obj = new Intern("John Smith", "123", "email", schoolName);

    expect(obj.getSchoolName()).toBe(schoolName);
  });

  it("get role should return Intern", () => {
    const role = "Intern";
    const obj = new Intern("John Smith", "123", "email", "schoolName");

    expect(obj.getRole()).toBe(role);
  });
});
