class Person{
    constructor(fname, lname){
        this.fname = fname;
        this.lname = lname;
    }
    fullname(){
        return `${this.fname}  ${this.lname}`;
    }


}

module.exports = Person;