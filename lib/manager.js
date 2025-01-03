import Employee from "./employee.js";

class Manager extends Employee {
    constructor(officeNumber){
        super()
        this.officeNumber = officeNumber
    }

    getInfo(name,id,email){
        // super("Joshua", 123333, "djjfdfedf")
        this.name = name;
        this.email = email;
        this.id = id;
        console.log(this.name)
        console.log(this.id)
        console.log(this.email)
    }

}

const manager = new Manager(12232)

manager.getInfo("Joshua", 123333, "djjfdfedf")

export default Manager