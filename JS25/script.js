const Obj = {};
const Obj1 = { name: "Lily", age: 33 };


function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}

console.log(isObjectEmpty(Obj));     
console.log(isObjectEmpty(Obj1)); 



class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `Привіт, я ${this.name}, мені ${this.age} років`;
  }
}

const user = new User("Ірина", 31);
console.log(user.sayHello());


const calculator = {
  num1: null,
  num2: null,
  ask: function() {
    this.num1 = +prompt('Введіть перше число:');
    this.num2 = +prompt('Введіть друге число:');
  },
  sum: function() {
    if (this.num1 === null || this.num2 === null) {
      console.log('Спочатку введіть числа');
    } else {
      console.log(`Сума: ${this.num1 + this.num2}`);
    }
  },
  mul: function() {
    if (this.num1 === null || this.num2 === null) {
      console.log('Спочатку введіть числа');
    } else {
      console.log(`Добуток: ${this.num1 * this.num2}`);
    }
  }
};

