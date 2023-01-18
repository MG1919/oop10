const Engineer = require("../library/Engineer");

describe("Engineer Class", () => {
    it("should be able to take in a github argument", () => {
      const gitHub = "github.com";
      const obj = new Engineer("John Smith", "123", "email", gitHub);

      expect(obj.gitHub).toBe(gitHub);
    });
  
  it("get gitHub should return gitHub", () => {
    const gitHub = "github.com";
    const obj = new Engineer("John Smith", "123", "email",gitHub);

    expect(obj.getGitHub()).toBe(gitHub);
  });

  it("get role should return Engineer", () => {
    const role = "Engineer";
    const obj = new Engineer("John Smith", "123", "email", "github.com");

    expect(obj.getRole()).toBe(role);
  });
});
