/**Astghik Baroyan */
"use strict";

/**Working with prototype */
let animal = {
  jumps: null,
};
let rabbit = {
  __proto__: animal,
  jumps: true,
};

console.log(rabbit.jumps); // true

delete rabbit.jumps;

console.log(rabbit.jumps); // null

delete animal.jumps;

console.log(rabbit.jumps); // undefined
//--------------

/**Searching algorithm */
let head = {
  glasses: 1,
};

let table = {
  pen: 3,
};

let bed = {
  sheet: 1,
  pillow: 2,
};

let pockets = {
  money: 2000,
};

pockets.__proto__ = bed;

bed.__proto__ = table;

table.__proto__ = head;

console.log(pockets.pen);

console.log(bed.glasses);

console.log(head.glasses);
//-------------

/**Where does it write? */
let animal1 = {
  eat() {
    this.full = true;
  },
};

let rabbit1 = {
  __proto__: animal,
};

//console.log(rabbit1.eat()); error - is not a function
console.log(rabbit1.eat); // undefined
//rabbit
//-------------

/**Why are both hamsters full? */
let hamster = {
  stomach: [],

  eat(food) {
    this.stomach = [food];
  },
};
let speedy = {
  __proto__: hamster,
};

let lazy = {
  __proto__: hamster,
};

speedy.eat('apple');
console.log(speedy.stomach); // apple

console.log(lazy.stomach); // []
//-------------

/**Changing "prototype" */
function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit2 = new Rabbit();

//Rabbit.prototype = {}; // true

//Rabbit.prototype.eats = false;  // false

//delete rabbit2.eats;  // true

//delete Rabbit.prototype.eats;  // undefined

console.log(rabbit2.eats); // true
//--------------

/** Create an object with the same constructor*/
function ElectroCar() {}
ElectroCar.prototype = {
  battery: true,
  electricMotor: true,
  fuel: false,
};

let teslaModelS = new ElectroCar();

console.log('teslaModel3.electricMotor', teslaModelS.electricMotor); // true
console.log('teslaModel3 === ElectroCar', teslaModelS === ElectroCar); // false

let teslaModel3 = ElectroCar.prototype.battery;
console.log('teslaModel3.battery', teslaModel3); // true

let teslaModelY = teslaModel3.constructor();
console.log('teslaModelY', teslaModelY); // false
//--------------

/**Add method "f.defer(ms)" to functions */
function f() {
  console.log('Hello!');
}

Function.prototype.defer = function (ms) {
  setTimeout(f, ms);
};

f.defer(1000);
//---------------

/**Add the decorating "defer()" to functions */
Function.prototype.defer1 = function (ms) {
  let f = this;
  return function (...args) {
    setTimeout(() => f.apply(this, args), ms);
  };
};

function f1(a, b) {
  console.log(a + b);
}

f1.defer1(1000)(1, 2);
f1.defer1(2000)(-5, 56);
//----------------

/** Add toString to the dictionary*/
let dictionary = Object.create(null);

dictionary.apple = 'Apple';
dictionary.__proto__ = 'test';

for (let key in dictionary) {
  console.log(key);
}

dictionary = Object.keys(dictionary).join(',');

console.log(dictionary);
console.log(typeof dictionary);
// console.log(typeof dictionary.__proto__);
// console.log(typeof dictionary.apple);

// let dictionary = Object.create(null, {
//   toString: {
//     value() {
//       return Object.keys(this).join(',');
//     }
//   }
// });

// dictionary.apple = 'Apple';
// dictionary.__proto__ = 'test';

// for(let key in dictionary) {
//   console.log(key); // 'apple',  '__proto__'
// }

// console.log(dictionary); // 'apple,__proto__'

// console.log(typeof dictionary.__proto__);
// console.log(typeof dictionary.apple);
//--------------

/**The difference between calls */
function Rabbit1(name) {
  this.name = name;
}
Rabbit1.prototype.sayHi = function () {
  console.log(this.name);
};

let rabbit3 = new Rabbit1('Rabbit');

rabbit3.sayHi(); //Rabbit
Rabbit1.prototype.sayHi(); //undefined
Object.getPrototypeOf(rabbit3).sayHi(); //undefined
rabbit3.__proto__.sayHi(); //undefined
