/**Astghik Baroyan */
"use strict";

function makeCounter1() {
  let count = 0;

  return function () {
    return count++;
  };
}

let counter1 = makeCounter1();
let counter2 = makeCounter1();

console.log(counter1()); // 0
console.log(counter1()); // 1

console.log(counter2()); // 0
console.log(counter2()); // 1
//--------------

function Counter() {
  let count = 0;

  this.up = function () {
    return ++count;
  };
  this.down = function () {
    return --count;
  };
}

let counter = new Counter();

console.log(counter.up()); // 1
console.log(counter.up()); // 2
console.log(counter.down()); // 1
//--------------

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    console.log(`${phrase}, ${user}`);
  }
  sayHi();
}
//---------------

function sum(a) {
  return function (b) {
    return a + b;
  };
}

console.log(sum(1)(2));
console.log(sum(18)(252));
//--------------

function inBetween(a, b) {
  return function (c) {
    return c >= a && c <= b;
  };
}

function inArray(arr) {
  return function (x) {
    return arr.includes(x);
  };
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6

console.log(arr.filter(inArray([1, 2, 10]))); // 1,2

console.log(arr.filter(inBetween(5, 7))); // 5,6,7

console.log(arr.filter(inArray([1, 2, 3, 5, 8, 9, 10]))); // 1,2,3,5

console.log(arr.filter(inBetween(7, 14))); // 7

console.log(arr.filter(inArray([10, 11, 12]))); // []
//---------------

let users = [
  {
    name: "John",
    age: 20,
    surname: "Johnson",
  },
  {
    name: "Alison",
    age: 18,
    surname: "Peterson",
  },
  {
    name: "Ann",
    age: 19,
    surname: "Hathaway",
  },
];

function byField(fieldName) {
  return (a, b) => (a[fieldName] > b[fieldName] ? 1 : -1);
}

users.sort(byField("name"));
users.forEach((user) => console.log(user.name)); // Alison, Ann, John

users.sort(byField("age"));
users.forEach((user) => console.log(user.name)); // Alison, Ann, John
//---------------

function makeArmy() {
  let shooters = [];

  for (let i = 0; i < 10; i++) {
    let shooter = function () {
      console.log(i);
    };
    shooters.push(shooter);
  }

  return shooters;
}

let army = makeArmy();

army[0](); // 0
army[5](); // 5
army[4](); // 4
//----------------

function makeCounter2() {
  let count = 0;

  return function () {
    let value = count;
    return value;
  };
}

function makeCounter3() {
  let count = 0;

  return function () {
    return --count;
  };
}

let counter3 = makeCounter2();
let counter4 = makeCounter2();

let counter5 = makeCounter3();
let counter6 = makeCounter3();

console.log("makeCounter1", counter1()); // 2

console.log("makeCounter1", counter2()); // 2

console.log("makeCounter2", counter3()); // 0

console.log("makeCounter2", counter4()); // 0

console.log("makeCounter3", counter5()); // -1

console.log("makeCounter3", counter6()); // -1
//--------------

function summableFunc(a) {
  let sum = a;

  function f(b) {
    sum += b;
    return f;
  }

  f.toString = function () {
    return sum;
  };

  return f;
}

console.log(summableFunc(1)(2)); // 3
console.log(summableFunc(1)(2)(3)); // 6
console.log(summableFunc(5)(-1)(2)); // 6
console.log(summableFunc(6)(-1)(-2)(-3)); // 0
console.log(summableFunc(0)(1)(2)(3)(4)(5)); // 15

const summable = (numberOne) => {
  const func = (numberTwo) => {
    if (typeof numberTwo === "undefined") {
      return numberOne;
    }
    return summable(numberOne + numberTwo);
  };
  // func.toString = function () {
  //     return numberOne;
  // };
  return func;
};

console.log(summable(1)(2)(3)(4)()); // 10
console.log(summable(1)(2)()); // 3
console.log(summable(1)(2)(3)()); // 6
console.log(summable(5)(-1)(2)()); // 6
console.log(summable(6)(-1)(-2)(-3)()); // 0
console.log(summable(0)(1)(2)(3)(4)(5)()); // 15
//----------------

function work(a, b) {
  return a + b;
}

// function spy(func, hash) {
//   let cache = new Map();
//   return function () {
//     let key = hash(arguments);
//     if (cache.has(key)) {
//       return cache.get(key);
//     }

//     let result = func.call(this, ...arguments);
//     cache.set(key, result);
//     return result;
//   };
// }

// function hash(args) {
//   return args[0] + ',' + args[1];
// }

// work = spy(work, hash);

// console.log(work(1, 2));  // 3

// console.log(work(4, 5));  // 9
//---------------

// function spy(func) {

//   function wrapper(...args) {
//     wrapper.calls.push(args);
//     return func.apply(this, arguments);
//   }

//   wrapper.calls = [];

//   return wrapper;
// }
//---------------

function f(x) {
  console.log(x);
}

function delay(f, ms) {
  return function () {
    setTimeout(() => f.apply(this, arguments), ms);
  };
}

let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

console.log(f1000("test"));
console.log(f1500("hi,Mary"));
//--------------

function f(a) {
  console.log(a);
}

// function debounce(f, ms) {

//   let isCooldown = false;

//   return function() {
//     if (isCooldown) return;

//     f.apply(this, arguments);

//     isCooldown = true;

//     setTimeout(() => isCooldown = false, ms);
//   };

// }

function debounce(func, ms) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, arguments), ms);
  };
}

f(1);
f(2); //  ? ? ? why 2 prints?

setTimeout(() => f(3), 100); //  ? ? ? why 3 prints?
setTimeout(() => f(4), 1100);
setTimeout(() => f(5), 1500); //  ? ? ? why 5 prints?
//----------------

function fancForThis() {
  console.log(this); // null
}

let user = {
  g: fancForThis.bind(null),
};

user.g();
//-----------------

function fancForThisName() {
  console.log(this.name);
}

fancForThisName = fancForThisName
  .bind({ name: "Alla" })
  .bind({ name: "Petya" });

fancForThisName(); //Alla
//---------------

function sayHi() {
  console.log(this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "Alexandra",
});

console.log(bound.test); // undefined
//---------------

function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "artsakh") ok();
  else fail();
}

let userPas = {
  name: "Monte",

  loginOk() {
    console.log(`${this.name} logged in`);
  },

  loginFail() {
    console.log(`${this.name} failed to log in`);
  },
};

askPassword(userPas.loginOk.bind(userPas), userPas.loginFail.bind(userPas));
//-----------------

function password(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}

let userpas = {
  name: "John",

  login(result) {
    console.log(this.name + (result ? " logged in" : " failed to log in"));
  },
};

password(user.login.bind(user, true), user.login.bind(user, false));
