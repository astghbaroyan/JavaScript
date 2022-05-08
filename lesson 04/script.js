/**Astghik Baroyan */
"use strict"

/*functions work the same։
1 ->
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('You are not an adult');
  }
}
2 ->
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('You are not an adult');
 }*/

/**The following function returns true if the parameter age is greater than 18.

Otherwise it asks for a confirmation and returns its result.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}

//-------------------
Rewrite it, to perform the same, but without if, in a single line.

Make two variants of checkAge:

Using a question mark operator ?
Using OR || */
function checkAge(age) {
  return (age > 18) ? true : confirm('You are not an adult');
}

function checkAge(Age) {
  return (Age > 18) || confirm('You are not an adult');
}

//-------------------
/*Write a function min(a,b) which returns the least of two numbers a and b.
For instance:

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1*/
function min(a, b) {
  return (a < b) ? a : b;
}

let result = min(2, 5);
console.log('from 2 and 5 min is', result);
result = min(3, -1);
console.log('from 3 and -1 min is', result);
result = min(1, 1);
console.log('from 1 and 1 min is', result);

//---------------------
/**Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
Create a web-page that prompts for x and n, and then shows the result of pow(x,n). */
function pow(x, n) {
  return x ** n;
}

let x = prompt('enter number for arg x', '');
let n = prompt('enter number n,n is the power of x', '');

if (n < 1) {
  console.log(`use natural number for ${n} `);
} else {
  console.log(pow(x, n));
}

//-------------------------------
/**Replace Function Expressions with arrow functions in the code below:

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
); */
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}
ask(
  'Do you agree?',
  () => {
    console.log('You agreed');
  },
  () => {
    console.log('You canceled');
  }
);

//------------------------------------

/**What’s wrong with the code style below?

function pow(x,n)
{
  let result=1;
  for(let i=0;i<n;i++) {result*=x;}
  return result;
}

let x=prompt("x?",''), n=prompt("n?",'')
if (n<=0)
{
  alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
}
else
{
  alert(pow(x,n))
}
Fix it.

solution->
function pow(x, n) //Space between options 
{
  let result = 1;  
  for(let i = 0; i < n; i++) {  //Curly brace { on the same line, after a space,space around operators
    result *= x;
  }
  return result;
}

let x = prompt( "x?", '');//Space between arguments
let n = prompt("n?", '');

//Empty line between logical blocks
if (n <= 0){
   console.log(`Power ${n} is not supported,           
      please enter an integer power greater than 0`);  //Lines are not very long
} else {    //} else { no newline
  console.log( pow(x, n) )  //Space around nested call
} */

//------------------------------
/**Write the code, one line for each action:

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object. */
let user = {
  name: 'John',
  surname: 'Smith',
};
console.log(user.name);
user.name = 'Pete';
console.log(user.name);
delete user.name;

//----------------------------

let regionArm = {
  region: 'Lori',
  center: 'Vanadzor'
};

console.log('region' in regionArm); // true

console.log('city' in regionArm); // false

//---------------------------
const user1 = {
  name: "John"
};
user.name = "Pete";
//the const refers to the user variable, not the object 

//---------------------------
/**We have an object storing salaries of our team:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

If salaries is empty, then the result must be 0. */
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

console.log(sum); // 390

//--------------------------
/*Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

For instance:

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

P.S. Use typeof to check for a number here.*/
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

let mult = 2;

function multiplyNumeric(obj) {
  for (let key in menu) {
    if (typeof salaries[key] == 'number') {
      mult = mult * salaries[key];
    }
  }
}
