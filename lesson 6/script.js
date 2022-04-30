/**Astghik Baroyan */
'use strict'

//---------------
function camelize(str) {
  return str
    .split('-') 
    .map(
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); 
}

camelize('background-color');
camelize('list-style-image');
camelize('-webkit-transition');
camelize('map-method');
//---------------



//---------------
function filterRange(arr1, a, b){

  return arr1.filter(item => (a <= item && item <= b)); 
   
}

let arr1 = [5, 3, 8, 1];
let filter = filterRange(arr1 ,1 , 4);
   console.log('filtered elements is',filter);
   console.log('array is',arr1);
//---------------



//---------------
function filterRangeInPlace(arr2, a, b) {

   for (let i = 0; i < arr2.length; i++) {
     let fnd = arr2[i];
 
     if (fnd < a || fnd > b) {
       arr2.splice(i, 1);
       i--;
     }
   }
 
 }
 
 let arr2 = [7, 14, 5, 1];
 
 filterRangeInPlace(arr2, 1, 7); 
 console.log(`filter in plase is ${arr2}`);
 //----------------



//---------------- 
function sortDescending(array) {
 
  array.sort( (a, b) => b - a );

  console.log(array);
   
}

 sortDescending([5, 2, 1, -10, 8]);
 sortDescending([38, -8, -1, -10, 81]);
 sortDescending([5, 42, 0, -10, -8]);
 sortDescending([475, 214, -541, -10, 8, 0, 14, -74]);
//----------------



//----------------
function copySorted(arrStrSort){

  arrStrSort.sort();
  console.log(arrStrSort);

 }

  copySorted(['HTML', 'JavaScript', 'CSS']);
  copySorted(['Lorem', 'Ipsum', 'is', 'simply', 'dummy']);
//-----------------



//-----------------
function Calculator() {

  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function(str) {

    let split = str.split(' '),
      a = +split[0],
      operator = split[1],
      b = +split[2]

    if (!this.methods[operator] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[operator](a, b);
  }

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}
//---------------



//---------------
let daniel = { 
  name: 'Daniel', 
  age: 25 
},
petya = { 
  name: 'Petya',
  age: 30 
},
darya = { 
  name: 'Darya',
  age: 28 };

let users = [daniel,petya,darya];
 
let names = users.map(item => item.name);

console.log(names);
//----------------



//---------------
let ani = { name: 'Ani', surname: 'Andreasyan', id: 1 };
let haykuhi = { name: 'Haykuhi', surname: 'Tumanyan', id: 2 };
let hayk = { name: 'Hayk', surname: 'Aramyan', id: 3 };

let allUsers = [ ani, haykuhi, hayk ];

let usersMapped = allUsers.map(item => ({fullName: `${item.name} ${item.surname}`,id:item.id}));


// usersMapped = [
//   { fullName: usersMapped[0], id: 1 },
//   { fullName: usersMapped[1], id: 2 },
//   { fullName: usersMapped[2], id: 3 }
// ]


console.log('user id', usersMapped[0].id ) // 1
console.log('user name', usersMapped[0].fullName ) // Ani Andreasyan
//---------------



//---------------
let sortByAge = function(){
  arrUsers.sort((a, b) => a.age > b.age ? 1 : -1);  
}
let lilith = { name: 'Lilith', age: 47 };
let anahit = { name: 'Anahit', age: 27 };
let taron = { name: 'Taron', age: 37 };

let arrUsers = [ lilith, anahit, taron ];

sortByAge(arrUsers)

console.log(arrUsers[0].name); 
console.log(arrUsers[1].name); 
console.log(arrUsers[2].name);
//---------------



//---------------
//let arrShuffle = [1, 2, 3];
function shuffle(arrShuffle){

  arrShuffle.sort(() => Math.random() - 0.5);;

  console.log(arrShuffle);

 }

shuffle([1, 2, 3]);
shuffle([1, 2, 3]);
//---------------



//---------------
function getAverageAge() {
  return usr.reduce((age, usr) => age + usr.age, 0) / usr.length;
}

let narek = { name: 'Narek', age: 24 };
let karen = { name: 'Karen', age: 34 };
let vardan = { name: 'Vardan', age: 44 };

let usr = [ narek, karen, vardan ];


console.log(getAverageAge(usr));
//---------------



//---------------
function unique(arrStr) {
  let result = [];

  for (let str of arrStr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

let strings = ['Lorem','Lorem','Lorem'
,'Ipsum','Ipsum','Contrary', 'to'
];

console.log( unique(strings) ); 
//--------------



//---------------
let arrSum = [11, 12, 13, 14, 13];

let sumArray = arrSum.reduce((sum, current) => sum + current, 0);

console.log('Sum Array is',sumArray);
//---------------



//---------------
let arrAy = [11, 12, 13, 14, 15];

for(let i = 0; i<arrAy.length; i++){
  if(i % 2 === 0){
    console.log(arrAy[i]) ;
  }
}
//---------------



//---------------
let values = ['Hare', 'Krishna', 'Hare', 'Krishna',
  'Krishna', 'Krishna', 'Hare', 'Hare',':-O'
];
function unique(ununiqueArr) {
    return Array.from(new Set(ununiqueArr));
  }

console.log( unique(values) ); // Hare,Krishna,:-O
//--------------



//--------------
function aclean(arrAnagram) {
  let map = new Map();

  for (let word of arrAnagram) {
    let sorted = word.toLowerCase().split("").sort().join("");
    map.set(sorted, word);
  }

  return Array.from(map.values());
}

let arrAnagram = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arrAnagram) );
//--------------



//--------------
let map = new Map();

map.set('name', 'Joseph');

let keys = Array.from(map.keys());

keys.push('more');

console.log(keys);
//---------------



//---------------
let salaries = {
  'John': 100,
  'Larry': 300,
  'Sona': 250,
  'Samvel': 400
};


function sumSalaries(salaries){
  let sum = 0;
   for (let sal of Object.values(salaries)){
    sal = ++sal;
    sum += sal;
   }
   return sum;
}

console.log( sumSalaries(salaries) ); //1054
//---------------



//---------------
let userCount = {
  'John': 100,
  'Larry': 300,
  'Sona': 250,
  'Samvel': 400,
  name : 'Bob',
  age : 33 ,
  isrobot : false
};


function countIs(userCount){
  let count = 0;
   for (let value of Object.values(userCount)){
    count++;
   }
   return count;
}

console.log( countIs(userCount) ); //7
//--------------



//--------------
let userIs = {
  name1: 'Justin',
  years: 22
};

let {name1: name1, years: age, isAdmin = false} = userIs;

console.log( name1 ); // Justin
console.log( age ); // 22
console.log( isAdmin ); // false
//--------------



