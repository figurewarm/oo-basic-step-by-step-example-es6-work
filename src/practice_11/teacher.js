import Person from "../../src/practice_11/person.js";

class Teacher extends Person {
    constructor(id, name, age, classes) {
        super(id, name, age);
        this.klasses = classes;
    }
    introduce() {
        if (this.klasses)
            return super.introduce() + ' I am a Teacher. I teach Class ' + this.klasses[0].number + ', ' + this.klasses[1].number + '.'
        else
            return super.introduce() + ' I am a Teacher. I teach No Class.'
    }
    isTeaching(student) {
        var judge = false;
        for (let i = 0; i < this.klasses.length; i++) {
            if (student.klass.number == this.klasses[i].number) {
                judge = true;
            }
        }
        return judge;
    }
}
export default Teacher