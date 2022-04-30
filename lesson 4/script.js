/**Astghik Baroyan */

//-----------------------------
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
 //------------------------------



//------------------------------
function checkAge(age){
    return (age > 18) ? true :confirm('You are not an adult') ;
}

function checkAge(Age){
   return (Age > 18) || confirm('You are not an adult') ;
}
//----------------------------



//----------------------------
function min(a, b) {
    return (a < b) ? a :b;
  }
  
  let result = min(2, 5);
  console.log('from 2 and 5 min is',result);
   result = min(3,-1);
  console.log('from 3 and -1 min is', result);
   result = min(1, 1);
  console.log('from 1 and 1 min is', result);
//--------------------------------


//-------------------------------
function pow(x, n) {
  return x**n;
  }
  
let x = prompt('enter number for arg x', '');
let n = prompt('enter number n,n is the power of x', '');

if (n < 1) {
  console.log(`use natural number for ${n} `);
} else {
 console.log( pow(x, n) );
}
//-------------------------------



//-------------------------------
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}
ask(
  'Do you agree?',
  () => {console.log('You agreed');},
  () => {console.log('You canceled');}
);
//-----------------------------------




//------------------------------------
/**Какие недостатки вы видите в стиле написания кода этого примера?
function pow(x,n)
{
  let result=1;
  for(let i=0;i<n;i++) {result*=x;}
  return result;
}

let x=prompt("x?",''), n=prompt("n?",'')
if (n<=0)
{
  alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`);
}
else
{
  alert(pow(x,n))
} 

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



//------------------------------
let user = {
   name: 'John',
   surname: 'Smith',
};
console.log(user.name);
user.name = 'Pete';
console.log (user.name);
delete user.name;
//-----------------------------



//----------------------------
let regionArm = {
    region: 'Lori',
    center: 'Vanadzor'
};

console.log( 'region' in regionArm ); // true

console.log( 'city' in regionArm ); // false

//----------------------------



//---------------------------
const user1 = {
  name: "John"
};
user.name = "Pete";
//the const refers to the user variable, not the object 
//----------------------------



//---------------------------
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
//---------------------------



//--------------------------
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

let mult = 2;
function multiplyNumeric(obj){
  for (let key in menu) {
    if(typeof salaries[key] == 'number'){
      mult = mult * salaries[key];
    }
  }
}
//--------------------------