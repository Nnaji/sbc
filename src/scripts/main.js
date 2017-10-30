class Person{
  constructor(name){
     this.name = name;
  }
  sayHello(){
    return 'Hello ' + this.name;

  }
}

var person = new Person('Mike');
document.write(person.sayHello());
