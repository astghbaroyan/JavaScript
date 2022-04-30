//Variables
let admin,Name;
Name = "John Wick";
admin = Name;
console.log (admin);

let planetEarth,ourPlanet = 'Earth';
let thisUser,userInThisMoment,correctUserName = 'Stefani';

console.log(1/0);

console.log("string"/2);

let _name = 'Jeck';
console.log(`Hi,${_name}`);
console.log(`result։ ${2**5}`);

let isGreater1 = 457 < 496; //true
let isGreater2 = -457 > 596; //false


//prompt,confirm
let userName = prompt('what is your name','');
console.log(`My name is ${userName}`);

let knowJS = confirm('Do you know JavaScript?')
console.log(knowJS);

//postfix,prefix
let a = 1; //2
let b = 1; //2
let c = ++a; //2
let d = b++; //1

let _a = 2;
let x = 1 + (_a *= 2); //_a=4,x=5

//operators
let firstNum1 = prompt("first number?", 1);
let secondNum1 = prompt("second number?", 2);
firstNum1 = Number(firstNum1);
secondNum1 = Number(secondNum1);
console.log('Result 1 is',firstNum1+secondNum1);

let firstNum2 = +prompt("first number?", 1);
let secondNum2 = +prompt("second number?", 2);
console.log('Result 2 is',firstNum2+secondNum2); 

let firstNum3 = prompt("first number?", 1);
let secondNum3 = prompt("second number?", 2);
console.log('Result 3 is',+firstNum3+ +secondNum3); 

//comparison operators
5 > 4 //true
"ананас" > "яблоко" //false
"2" > "12"  //true
undefined == null //true
undefined === null //false
null == "\n0\n" //false
null === +"\n0\n" //false

//if,elee,?
let NameJS = 'ECMAScript';
let officialNameJS = prompt('What is the "official" name of JavaScript?','');
if (officialNameJS == NameJS){
    console.log('Right');
}
else{
    console.log(`You dont know? ${NameJS}`);
}


let inputNum = prompt('Please enter a number', );
if (inputNum > 0){
    console.log('1');
}
else if (inputNum < 0){
    console.log('-1');
}
else {
    console.log('0');
}


let _result = (a + b < 4)?'isGreater':'isNotGreater';

let login;
let message = (login == 'Partner') ? 'Hi' :
  (login == 'Director') ? 'Hello' :
  (login == '') ? 'Its not the log in' :
  '';

//&&,||,!
let age = 0;
if(age >= 14 && age <= 90);

if(!(age >= 14 && age <= 90));
if(age < 14 || age > 90);

if (-1 || 0) ; //-1
if (-1 && 0) ; //0
if (null || -1 && 1) ; //1


let userName1 = prompt("Who are you?", '');
if (userName1 == 'admin') {
let password = prompt('Enter a password', '');
  if (password == 'I am the director') {
    console.log( 'Hello!' );
  } else if (password == '' || password == null) {
    console.log( 'stop' );
  } else {
    console.log( 'wrong password' );
  }
} else if (userName1 == '' || userName1 == null) {
  console.log( 'stop' );
} else {
  console.log( 'I dont know you' );
}


//print even numbers
for(let i = 2;i <= 10;++i){
  if(i % 2 == 0){
    console.log(i);
  }
}

//Replace for with while
/*
for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}
*/
let i = 0;
while(i < 3){
  console.log(`number ${i}!`);
  i++;
}

/**enter a number greater than 100 */
greater:do{
  inputNum = prompt('enter a number greater than 100','');
    if (!inputNum) break greater;
    i++;
}while(inputNum < 100);

/**print prime numbers */
let intervalNum = prompt('Enter the upper limit of the interval','');
valPrime:
for(i = 2;i <= intervalNum; i++){
  for(let j = 2; j < i; j++){
    if(i % j == 0) continue valPrime;
  }
  console.log(i);
}

/**switch convert if..else:
 * switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;
  default:
    alert( 'We hope that this page looks ok!' );
} */
let Browser = prompt('Enter name browser','')
if(Browser === 'Edge'){
  console.log("You've got the Edge!");
}
else if(Browser === 'Chrome' || Browser === 'Firefox' ||Browser === 'Safari' || Browser === 'Opera'){
  console.log('Okay we support these browsers too');
}
else{
  console.log( 'We hope that this page looks ok!');
}

/**if..else convert switch:
 * const number = +prompt('Введите число между 0 и 3', '');
if (number === 0) {
  alert('Вы ввели число 0');
}
if (number === 1) {
  alert('Вы ввели число 1');
}
if (number === 2 || number === 3) {
  alert('Вы ввели число 2, а может и 3');
}
 */
let arg = prompt('Please enter a number between 0 and 3', '');
switch (arg) {
  case '0':
    console.log('You entered the number 0');
    break;

  case '1':
    console.log('You entered the number 1');
    break;

  case '2':
  case '3':
    console.log('You entered the number 2, or maybe 3');
    break;
}





