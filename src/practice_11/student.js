import Person from "../../src/practice_11/person.js";
class Student extends Person {
    constructor(id, name, age, Class) {
        super(id, name, age);
        this.klass = Class;
    }
    introduce() {
        if (this.klass.leader)
            return super.introduce() + ' I am a Student. I am Leader of Class ' + this.klass.number + '.';
        else {
            console.log('It is not one of us.')
            return super.introduce() + ' I am a Student. I am at Class ' + this.klass.number + '.';
        }
    }
}

export default Student