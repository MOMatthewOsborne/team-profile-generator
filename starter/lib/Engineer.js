// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
require(employee.js);

class engineer extends employee {
    constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
    }

    getGithub() {
        return this.github
    }
}