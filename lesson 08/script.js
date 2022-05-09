/**Astghik Baroyan */
"use strict";

/**Here we make two counters: counter and counter2 using the same makeCounter function.

Are they independent? What is the second counter going to show? 0,1 or 2,3 or something else? */
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

/**Here a counter object is made with the help of the constructor function.
Will it work? What will it show? */
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

/**Look at the code. What will be the result of the call at the last line?
let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi(); */
let phrase = 'Hello';

if (true) {
  let user = 'John';

  function sayHi() {
    console.log(`${phrase}, ${user}`);
  }
  sayHi();
}
//---------------

/**Write function sum that works like this: sum(a)(b) = a+b.
Yes, exactly this way, using double parentheses (not a mistype).
For instance:

sum(1)(2) = 3
sum(5)(-1) = 4 */
function sum(a) {
  return function (b) {
    return a + b;
  };
}

console.log(sum(1)(2));
console.log(sum(18)(252));
//--------------

/**We have a built-in method arr.filter(f) for arrays. It filters all elements through the function f. If it returns true, then that element is returned in the resulting array.

Make a set of “ready to use” filters:

inBetween(a, b) – between a and b or equal to them (inclusively).
inArray([...]) – in the given array.
The usage must be like this:

arr.filter(inBetween(3,6)) – selects only values between 3 and 6.
arr.filter(inArray([1,2,3])) – selects only elements matching with one of the members of [1,2,3].
For instance:

/* .. your code for inBetween and inArray 

let arr = [1, 2, 3, 4, 5, 6, 7];

alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

alert( arr.filter(inArray([1, 2, 10])) ); // 1,2 */
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

/**We’ve got an array of objects to sort:

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];
The usual way to do that would be:

// by name (Ann, John, Pete)
users.sort((a, b) => a.name > b.name ? 1 : -1);

// by age (Pete, Ann, John)
users.sort((a, b) => a.age > b.age ? 1 : -1);
Can we make it even less verbose, like this?

users.sort(byField('name'));
users.sort(byField('age'));
So, instead of writing a function, just put byField(fieldName).

Write the function byField that can be used for that. */
let users = [
  {
    name: 'John',
    age: 20,
    surname: 'Johnson',
  },
  {
    name: 'Alison',
    age: 18,
    surname: 'Peterson',
  },
  {
    name: 'Ann',
    age: 19,
    surname: 'Hathaway',
  },
];

function byField(fieldName) {
  return (a, b) => (a[fieldName] > b[fieldName] ? 1 : -1);
}

users.sort(byField('name'));
users.forEach((user) => console.log(user.name)); // Alison, Ann, John

users.sort(byField('age'));
users.forEach((user) => console.log(user.name)); // Alison, Ann, John
//---------------

/**The following code creates an array of shooters.

Every function is meant to output its number. But something is wrong…

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let shooter = function() { // create a shooter function,
      alert( i ); // that should show its number
    };
    shooters.push(shooter); // and add it to the array
    i++;
  }

  // ...and return the array of shooters
  return shooters;
}

let army = makeArmy();

// all shooters show 10 instead of their numbers 0, 1, 2, 3...
army[0](); // 10 from the shooter number 0
army[1](); // 10 from the shooter number 1
army[2](); // 10 ...and so on.
Why do all of the shooters show the same value?

Fix the code so that they work as intended. */
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

/**Modify the code of makeCounter() so that the counter can also decrease and set the number:

counter() should return the next number (as before).
counter.set(value) should set the counter to value.
counter.decrease() should decrease the counter by 1.
See the sandbox code for the complete usage example.

P.S. You can use either a closure or the function property to keep the current count. Or write both variants. */
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

console.log('makeCounter1', counter1()); // 2

console.log('makeCounter1', counter2()); // 2

console.log('makeCounter2', counter3()); // 0

console.log('makeCounter2', counter4()); // 0

console.log('makeCounter3', counter5()); // -1

console.log('makeCounter3', counter6()); // -1
//--------------

/**Write function sum that would work like this:

sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15
P.S. Hint: you may need to setup custom object to primitive conversion for your function. */
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
    if (typeof numberTwo === 'undefined') {
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

/**Create a decorator spy(func) that should return a wrapper that saves all calls to function in its calls property.

Every call is saved as an array of arguments. */
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

/**Create a decorator delay(f, ms) that delays each call of f by ms milliseconds. */
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

console.log(f1000('test'));
console.log(f1500('hi,Mary'));
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

/**Debounce decorator */
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

/**Bound function as a method */
function fancForThis() {
  console.log(this); // null
}

let user = {
  g: fancForThis.bind(null),
};

user.g();
//-----------------

/**Can we change this by additional binding?

What will be the output? */
function fancForThisName() {
  console.log(this.name);
}

fancForThisName = fancForThisName
  .bind({
    name: 'Alla',
  })
  .bind({
    name: 'Petya',
  });

fancForThisName(); //Alla
//---------------

/**There’s a value in the property of a function. Will it change after bind? Why, or why not? */
function sayHi() {
  console.log(this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: 'Alexandra',
});

console.log(bound.test); // undefined
//---------------

/**The call to askPassword() in the code below should check the password and then call user.loginOk/loginFail depending on the answer.

But it leads to an error. Why?

Fix the highlighted line for everything to start working right (other lines are not to be changed).
*askPassword(user.loginOk, user.loginFail); */
function askPassword(ok, fail) {
  let password = prompt('Password?', '');
  if (password == 'artsakh') ok();
  else fail();
}

let userPas = {
  name: 'Monte',

  loginOk() {
    console.log(`${this.name} logged in`);
  },

  loginFail() {
    console.log(`${this.name} failed to log in`);
  },
};

askPassword(userPas.loginOk.bind(userPas), userPas.loginFail.bind(userPas));
//-----------------

/**Partial application for login */
function password(ok, fail) {
  let password = prompt('Password?', '');
  if (password == 'rockstar') ok();
  else fail();
}

let userpas = {
  name: 'John',

  login(result) {
    console.log(this.name + (result ? ' logged in' : ' failed to log in'));
  },
};

password(user.login.bind(user, true), user.login.bind(user, false));
