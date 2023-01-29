// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
require(employee.js)

class intern extends employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return "intern";
    }
}