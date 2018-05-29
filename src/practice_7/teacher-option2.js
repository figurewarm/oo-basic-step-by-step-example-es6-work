import Person from "../../src/practice_7/person.js";
class Teacher extends Person {
    constructor(name, age, Class) {
        super(name, age);
        this.klass = Class;
    }
    introduce() {
        if (this.klass)
            return super.introduce() + ' I am a Teacher. I teach Class ' + this.klass.number + '.'
        else
            return super.introduce() + ' I am a Teacher. I teach No Class.'
    }
    introduceWith(Student) {
        if (Student.klass.number == this.klass.number)
            return super.introduce() + ' I am a Teacher. I teach ' + Student.name + '.'
        else
            return super.introduce() + ' I am a Teacher. I don\'t teach ' + Student.name + '.'
    }
}
export default Teacher