import Person from "../../src/practice_7/person.js";
class Student extends Person {
    constructor(name, age, Class) {
        super(name, age);
        this.klass = Class;
    }
    introduce() {
        return super.introduce() + ' I am a Student. I am at Class ' + this.klass.number + '.'
    }
}

export default Student