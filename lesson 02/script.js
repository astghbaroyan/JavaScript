/*Astghik Baroyan*/
"use strict"

// number
const x = 4;
const y = -5;
const z = 4.5;
const a = 0;
const b = Infinity;
const c = -Infinity;
const d = NaN;
console.log('4:', typeof x);
console.log('-5:', typeof y);
console.log('4.5:', typeof z);
console.log('sum of two numbers։', typeof (x + y));
console.log('multiplication of two numbers:', typeof (y * z));
console.log('division of two numbers:', typeof (x / y));
console.log('division by 0:', typeof (x / a));
console.log('+Infinity:', typeof b);
console.log('-Infinity:', typeof c);
console.log('NaN:', typeof NaN);
console.log('division by NaN:', typeof (x / d));
console.log('multiplied by NaN:', typeof (x * d));
console.log('sum of +Infinity and NaN:', typeof (b + d));

//string
const e = 'Astghik';
console.log('Astghik:', typeof e);
const f = 'Baroyan';
console.log('Baroyan:', typeof f);
const g = 'Armenia';
console.log(`Armenia:`, typeof g);
console.log('sum of number and string:', typeof (x + e));

//boolean
const h = true;
console.log('true:', typeof h);
const i = false;
console.log('false:', typeof i);
console.log('sum of boolean and number:', typeof (x + i));
console.log('multiplication of boolean and string:', typeof (e * h));

//undifined
const j = undefined;
console.log('undefined:', typeof j);
console.log('sum of undefined and number:', typeof (x + j));
console.log('multiplication of boolean and undefined:', typeof (h + j));
console.log('division of undefined and string:', typeof (e / j));
let k;
console.log('k:', typeof k);

//null
console.log('null', typeof null);

//symbol,object,arrey
console.log('symbol:', typeof Symbol);
console.log('object:', typeof Object);
console.log('arrey:', typeof Array);

console.log('null === undefined:', null === undefined); // false
console.log('null  == undefined:', null == undefined); // true
