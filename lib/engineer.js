import Employee from "./employee.js"

class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email)
        this.github = github
    }
    getGitHub(){
        return this.github
    }
    getRole(){
        return 'Engineer'
    }
}

export default Engineer