/**Astghik Baroyan */
'use strict'

//--------------------
let user = {
  name: 'John',
  go: function () {
    console.log(this.name)
  }
};

(user.go)()

//---------------------
let obj, method;

obj = {
  go: function () {
    console.log(this);
  }
};

obj.go(); // (1) [object Object]

(obj.go)(); // (2) [object Object]

(method = obj.go)(); // (3) [object Window]]

(obj.go || obj.stop)(); // (4) [object Window]

//-------------------
/**Here the function makeUser returns an object.

What is the result of accessing its ref? Why?

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // What's the result? */

function makeUser() {
  return {
    name: 'Stella',
    ref() {
      return this;
    }
  };
};

let user1 = makeUser();

console.log(user1.ref().name); // Stella

//------------------
/**Create an object calculator with three methods:

read() prompts for two values and saves them as object properties with names a and b respectively.
sum() returns the sum of saved values.
mul() multiplies saved values and returns the result.
let calculator = {
  // ... your code ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() ); */

let firstNum = +prompt('enter the first number for calculator', 0);
let secondNum = +prompt('enter the second number for calculator', 0);

let calculator = {
  read() {
    console.log(firstNum, secondNum);
  },

  sum() {
    return firstNum + secondNum;
  },

  mul() {
    return firstNum * secondNum;
  }
};

calculator.read();
console.log('sum is:', calculator.sum());
console.log('mul is:', calculator.mul());

//-----------------
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    console.log(this.step);
    return this;
  }
};

//   ladder.up();
//   ladder.up();
//   ladder.down();
//   ladder.showStep(); 

ladder.up().up().down().showStep();

//----------------
let usr = {
  name: 'Tony',
}

function A() {
  return usr;
}

function B() {
  return usr;
}

let a = new A;
let b = new B;

console.log(a == b); // true

//--------------
/**Create a constructor function Calculator that creates objects with 3 methods:

read() asks for two values using prompt and remembers them in object properties.
sum() returns the sum of these properties.
mul() returns the multiplication product of these properties.
For instance:

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() ); */

function Calculator() {

  this.read1 = function () {
    this.a = +prompt('enter the first number for calculator-constructor', 0);
    this.b = +prompt('enter the second number for calculator-constructor', 0);
  };

  this.sum1 = function () {
    return this.a + this.b;
  };

  this.mul1 = function () {
    return this.a * this.b;
  };
}

let calcConstructor = new Calculator();
calcConstructor.read1();

console.log('Calculator-constructor sum is: ' + calcConstructor.sum1());
console.log('Calculator-constructor mul is: ' + calcConstructor.mul1());

//-------------
/**Create new Accumulator
importance: 5
Create a constructor function Accumulator(startingValue).

Object that it creates should:

Store the “current value” in the property value. The starting value is set to the argument of the constructor startingValue.
The read() method should use prompt to read a new number and add it to value.
In other words, the value property is the sum of all user-entered values with the initial value startingValue.

Here’s the demo of the code:

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values */

function Accumulator(startingValue) {
  this.value = startingValue;
  this.readAccuml = function () {
    this.c = +prompt('enter the number for accumlator', 0);
    this.value = this.value + this.c;
  };
}
let accumulator = new Accumulator(1);
accumulator.readAccuml();
accumulator.readAccuml();

console.log(accumulator.value);

//----------------
/**Consider the following code:

let str = "Hello";

str.test = 5;

alert(str.test);
What do you think, will it work? What will be shown? */

// let str = 'Hello';
// str.test = 5;
//console.log(str.test); //undefined,  with 'use strict':error

//----------------
// let str1 = 'Mario';

// console.log('toUpperCase:', str1.toUpperCase() ); //MARIO
// console.log('toLocaleLowerCase:', str1.toLocaleLowerCase() ); //mario
// console.log('repeat:', str1.repeat() );
// console.log('replace:', str1.replace() );  //Mario
// console.log('toString:', str1.toString() );  //Mario
// console.log('toLocaleUpperCase:', str1.toLocaleUpperCase() ); //MARIO
// console.log('toLowerCase:', str1.toLowerCase() );  //mario
// console.log('trim:', str1.trim() );  //Mario
// console.log('includes:', str1.includes() ); //false
// console.log('indexOf:', str1.indexOf() );  //-1
// console.log('padEnd:', str1.padEnd() );  //Mario
// console.log('slice:', str1.slice() );   //Mario
// console.log('split:', str1.split() );  //['Mario']
// console.log('startsWith:', str1.startsWith() );  //false
// console.log('substring:', str1.substring() ); //Mario
// console.log('lastIndexOf:', str1.lastIndexOf() ); //-1 
// console.log('charAt:', str1.charAt() ); //M
// console.log('charCodeAt:', str1.charCodeAt() ); //77
// console.log('codePointAt:', str1.codePointAt() ); //77
// console.log('concat:', str1.concat() ); //Mario
// console.log('valueOf', str1.valueOf() ); //Mario
// console.log('normalize', str1.normalize() );  //Mario
// console.log('match:', str1.match() );  //['', index: 0, input: 'Mario', groups: undefined]
// console.log('matchAll:', str1.matchAll() );  //RegExpStringIterator {}
//----------------



//----------------
// let nmbr = 12.5678;

// console.log('toExponential: ',nmbr.toExponential(2));  
// console.log('toFixed: ',nmbr.toFixed(2)); 
// console.log('toLocaleString: ',nmbr.toLocaleString(2)); 
// console.log('toPrecision: ',nmbr.toPrecision(2));
// console.log('toString: ',nmbr.toString(2)); 
// console.log('valueOf: ',nmbr.valueOf(2));

//-----------------
let systemNum = +prompt('enter a number for number system', 0);
console.log('number for systems is ', systemNum);
console.log('binary system: ', systemNum.toString(2));
console.log('triple system: ', systemNum.toString(3));
console.log('eight system: ', systemNum.toString(8));
console.log('decimal system: ', systemNum.toString(10));
console.log('sixteen system: ', systemNum.toString(16));
console.log('thirty-six system: ', systemNum.toString(36));

//-----------------
/**Create a script that prompts the visitor to enter two numbers and then shows their sum. */
let aForSum = +prompt('enter a number for sum', 0);
let bForSum = +prompt('enter a number for sum', 0);

console.log(aForSum + bForSum);

//----------------
console.log(1.35.toFixed(1)); // 1.4
console.log(Math.round(6.35 * 10) / 10); // 6.4

//----------------
/**Create a function readNumber which prompts for a number until the visitor enters a valid numeric value.

The resulting value must be returned as a number.

The visitor can also stop the process by entering an empty line or pressing “CANCEL”. In that case, the function should return null. */
function readNumber() {
  let inputNum = 0;

  do {
    inputNum = +prompt('enter a number ', );
  } while (!isFinite(inputNum));

  if (isFinite(inputNum)) {
    console.log(inputNum);
  } else if (inputNum === null || inputNum === '') {
    console.log(null);
  }
}

readNumber();

//----------------
let i = 0;
while (i < 11) {
  i += 0.2;
  if (i > 9.8 && i < 10.2) console.log(i);
}

//----------------
/**The built-in function Math.random() creates a random value from 0 to 1 (not including 1).

Write the function random(min, max) to generate a random floating-point number from min to max (not including max).

Examples of its work:

alert( random(1, 5) ); // 1.2345623452
alert( random(1, 5) ); // 3.7894332423
alert( random(1, 5) ); // 4.3435234525 */
function random(min, max) {
  return min + Math.random() * (max - min);
}

console.log('random', random(1, 5));
console.log('random', random(1, 5));
console.log('random', random(1, 5));

//----------------
/**Create a function randomInteger(min, max) that generates a random integer number from min to max including both min and max as possible values.

Any number from the interval min..max must appear with the same probability.

Examples of its work:

alert( randomInteger(1, 5) ); // 1
alert( randomInteger(1, 5) ); // 3
alert( randomInteger(1, 5) ); // 5 */

function randomInteger(min, max) {
  let rndInt = min + Math.random() * (max + 1 - min);
  return Math.floor(rndInt);
}

console.log('randomInteger', randomInteger(1, 5)); // 1
console.log('randomInteger', randomInteger(1, 5)); // 3
console.log('randomInteger', randomInteger(1, 5)); // 5

//---------------
console.log('ucFirst', 'mary' [0].toUpperCase() + 'mary'.substr(1, 3));

//---------------
/**Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.

The function must be case-insensitive:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false */

function checkSpam(str) {
  console.log(str.includes('viagra') || str.includes('XXX'));
}

checkSpam('buy ViAgRA now');
checkSpam('free xxxxx');
checkSpam("innocent rabbit");

//---------------
/**Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.

The result of the function should be the truncated (if needed) string.

For instance:

truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te…"

truncate("Hi everyone!", 20) = "Hi everyone!" */

function truncate(str, maxlength) {
  if (str.length > maxlength) {
    console.log(str.slice(0, maxlength - 1) + '…');
  } else {
    console.log(str);
  }
}

truncate('There are many variations of passages of Lorem Ipsum', 15);
truncate('There are many variations of passages of Lorem Ipsum', 100);

//----------------
/**We have a cost in the form "$120". That is: the dollar sign goes first, and then the number.

Create a function extractCurrencyValue(str) that would extract the numeric value from such string and return it.

The example:

alert( extractCurrencyValue('$120') === 120 ); // true */

function extractCurrencyValue(str) {
  console.log(str.slice(1, str.end));
}

extractCurrencyValue('$120');
extractCurrencyValue('$4444');
extractCurrencyValue('$1');

//----------------
/**What is this code going to show?*/
let fruits = ["Apples", "Pear", "Orange"];

let shoppingCart = fruits;
shoppingCart.push("Banana");

console.log('Array lenght:', fruits.length); // 4

//---------------
/**Let’s try 5 array operations.

Create an array styles with items “Jazz” and “Blues”.
Append “Rock-n-Roll” to the end.
Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
Strip off the first value of the array and show it.
Prepend Rap and Reggae to the array.
The array in the process:

Jazz, Blues
Jazz, Blues, Rock-n-Roll
Jazz, Classics, Rock-n-Roll
Classics, Rock-n-Roll
Rap, Reggae, Classics, Rock-n-Roll */

let styles = ['Jazz', 'Blues'];
console.log(styles);
styles[2] = ' Rock and roll';
console.log(styles);
styles[1] = 'Classical';
console.log(styles);
console.log(styles.shift());
console.log(styles);
console.log(styles.unshift('Rap', 'Reggae'));
console.log(styles);

//----------------
/**What is the result? */
let arr = ["a", "b"];

arr.push(function () {
  console.log(this);
})

arr[2]();

//---------------
/**Write the function sumInput() that:

Asks the user for values using prompt and stores the values in the array.
Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
Calculates and returns the sum of array items.
P.S. A zero 0 is a valid number, please don’t stop the input on zero. */
function sumArr(arr) {
  let frstElmnt = +prompt('enter the first number for sum array', 0);
  let scndElmnt = +prompt('enter the second number for sum array', 0);
  arr = [frstElmnt, scndElmnt]
  console.log(frstElmnt + scndElmnt);
  console.log(arr[0] + arr[1]);

}

sumArr();

//--------------
/**The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].

The task is: find the contiguous subarray of arr with the maximal sum of items.

Write the function getMaxSubSum(arr) that will return that sum.

For instance:

getMaxSubSum([-1, 2, 3, -9]) == 5 (the sum of highlighted items)
getMaxSubSum([2, -1, 2, 3, -9]) == 6
getMaxSubSum([-1, 2, 3, -9, 11]) == 11
getMaxSubSum([-2, -1, 1, 2]) == 3
getMaxSubSum([100, -9, 2, -3, 5]) == 100
getMaxSubSum([1, 2, 3]) == 6 (take all)
If all items are negative, it means that we take none (the subarray is empty), so the sum is zero:

getMaxSubSum([-1, -2, -3]) = 0 */
function getMaxSubSum(arr) {
  let maxSum = 0; // если элементов не будет - возвращаем 0

  for (let i = 0; i < arr.length; i++) {
    let sumStarted = 0;
    for (let j = i; j < arr.length; j++) {
      sumStarted += arr[j];
      maxSum = Math.max(maxSum, sumStarted);
    }
  }

  return maxSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9])); // 5
console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
console.log(getMaxSubSum([-2, -1, 1, 2])); // 3
console.log(getMaxSubSum([1, 2, 3])); // 6
console.log(getMaxSubSum([100, -9, 2, -3, 5])); // 100
console.log(getMaxSubSum([-1, -2, -3])); // 0