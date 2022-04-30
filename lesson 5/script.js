/**Astghik Baroyan */
'use strict'

//--------------------
let user = {
    name: 'John',
    go: function() { console.log(this.name) }
  }; 
  
  (user.go)()
//--------------------


//---------------------
let obj, method;

obj = {
  go: function() { console.log(this); }
};

obj.go();               // (1) [object Object]

(obj.go)();             // (2) [object Object]

(method = obj.go)();    // (3) [object Window]]

(obj.go || obj.stop)(); // (4) [object Window]
//--------------------


//-------------------
function makeUser() {
    return {
      name: 'Stella',
      ref(){
          return this;
      } 
    };
  };
  
  let user1 = makeUser();
  
  console.log( user1.ref().name ); // Stella
//------------------


//------------------
let firstNum = +prompt('enter the first number for calculator', 0);
let secondNum = +prompt('enter the second number for calculator', 0);

let calculator = {
       read(){
        console.log(firstNum,secondNum);
       },

    sum(){
        return firstNum + secondNum;
    },

    mul(){
        return firstNum * secondNum;
    }
  };
  
  calculator.read();
  console.log('sum is:', calculator.sum() );
  console.log('mul is:',calculator.mul() );
//------------------


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
    showStep: function() { 
      console.log( this.step );
      return this;
    }
  };

//   ladder.up();
//   ladder.up();
//   ladder.down();
//   ladder.showStep(); 

ladder.up().up().down().showStep(); 
//----------------


//----------------
let usr ={
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

console.log( a == b ); // true
//--------------


//--------------
function Calculator() {

    this.read1 = function() {
      this.a = +prompt('enter the first number for calculator-constructor', 0);
      this.b = +prompt('enter the second number for calculator-constructor', 0);
    };
  
    this.sum1 = function() {
      return this.a + this.b;
    };
  
    this.mul1 = function() {
      return this.a * this.b;
    };
  }
  
  let calcConstructor = new Calculator();
  calcConstructor.read1();
  
 console.log( 'Calculator-constructor sum is: ' + calcConstructor.sum1() );
 console.log( 'Calculator-constructor mul is: ' + calcConstructor.mul1() );
//--------------


//-------------
function Accumulator(startingValue){
    this.value = startingValue;
    this.readAccuml = function(){
        this.c = +prompt('enter the number for accumlator', 0);
        this.value = this.value + this.c;
    };
}
    let accumulator = new Accumulator(1);
    accumulator.readAccuml();
    accumulator.readAccuml();
   
    console.log(accumulator.value);
//----------------


//----------------
// let str = 'Hello';

// str.test = 5;

//console.log(str.test); //undefined,  with 'use strict':error
//----------------
 


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



//-----------------
let systemNum = +prompt('enter a number for number system', 0);
console.log('number for systems is ',systemNum);
console.log('binary system: ',systemNum.toString(2));
console.log('triple system: ',systemNum.toString(3));
console.log('eight system: ',systemNum.toString(8));
console.log('decimal system: ',systemNum.toString(10));
console.log('sixteen system: ',systemNum.toString(16));
console.log('thirty-six system: ',systemNum.toString(36)); 
//-----------------



//-----------------
let aForSum = +prompt('enter a number for sum', 0);
let bForSum = +prompt('enter a number for sum', 0);

console.log(aForSum + bForSum);
//-----------------



//----------------
console.log( 1.35.toFixed(1) ); // 1.4
console.log( Math.round(6.35 *10)/10 ); // 6.4
//----------------



//----------------
function readNumber() {
let inputNum = 0;

do{ 
 inputNum = +prompt('enter a number ',);
}while(!isFinite(inputNum));

  if (isFinite(inputNum)){
    console.log(inputNum);
  }else if(inputNum === null || inputNum === ''){
    console.log(null);
  }
}

readNumber();
//----------------



//----------------
let i = 0;
while (i < 11) {
  i += 0.2;
  if (i > 9.8 && i < 10.2) console.log( i );
}
//----------------



//----------------
function random(min, max) {
  return min + Math.random() * (max - min);
}

console.log('random', random(1, 5) );
console.log('random', random(1, 5) );
console.log('random', random(1, 5) );
//----------------



//----------------
function randomInteger(min, max){
  let rndInt =  min + Math.random() * (max + 1 - min);
  return Math.floor(rndInt);
}

console.log('randomInteger', randomInteger(1, 5) ); // 1
console.log('randomInteger', randomInteger(1, 5) ); // 3
console.log('randomInteger', randomInteger(1, 5) ); // 5
//---------------



//---------------
console.log('ucFirst','mary'[0].toUpperCase() + 'mary'.substr(1, 3) ); 
//---------------



//---------------
function checkSpam(str){
  console.log(str.includes('viagra') || str.includes('XXX'));
}

checkSpam('buy ViAgRA now');
checkSpam('free xxxxx');
checkSpam("innocent rabbit");
//---------------



//---------------
function truncate(str, maxlength){
  if(str.length > maxlength){
   console.log(str.slice(0, maxlength - 1) + '…');
  }else{
   console.log(str);
  }
}

truncate('There are many variations of passages of Lorem Ipsum',15);
truncate('There are many variations of passages of Lorem Ipsum',100);
//----------------



//----------------
function extractCurrencyValue(str){
  console.log(str.slice(1,str.end));
}

extractCurrencyValue('$120');
extractCurrencyValue('$4444');
extractCurrencyValue('$1');
//----------------



//----------------
let fruits = ["Apples", "Pear", "Orange"];

let shoppingCart = fruits;
shoppingCart.push("Banana");

console.log('Array lenght:', fruits. length ); // 4
//----------------



//---------------
let styles = ['Jazz', 'Blues'];
console.log(styles);
styles[2] = ' Rock and roll';
console.log(styles);
styles[1] = 'Classical';
console.log(styles);
console.log( styles.shift() ); 
console.log(styles);
console.log(styles.unshift('Rap', 'Reggae') );
console.log(styles);
//----------------



//----------------
let arr = ["a", "b"];

arr.push(function() {
  console.log( this );
})

arr[2]();
//----------------




//---------------
function sumArr(arr) {
 let frstElmnt = +prompt('enter the first number for sum array', 0);
 let scndElmnt = +prompt('enter the second number for sum array', 0);
  arr = [frstElmnt,scndElmnt]
  console.log(frstElmnt + scndElmnt) ;
  console.log(arr[0] + arr[1]) ;

}

sumArr();
//--------------




//--------------
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

console.log( getMaxSubSum([-1, 2, 3, -9]) ); // 5
console.log( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
console.log( getMaxSubSum([-2, -1, 1, 2]) ); // 3
console.log( getMaxSubSum([1, 2, 3]) ); // 6
console.log( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
console.log(getMaxSubSum([-1, -2, -3]) ); // 0