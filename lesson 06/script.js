/**Astghik Baroyan */
'use strict'

//---------------
/**Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
 */
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
/** Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

The function should not modify the array. It should return the new array.

For instance:

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified)*/
function filterRange(arr1, a, b) {

  return arr1.filter(item => (a <= item && item <= b));

}

const arr1 = [5, 3, 8, 1];
const filter = filterRange(arr1, 1, 4);
console.log('filtered elements is', filter);
console.log('array is', arr1);

//---------------
/**Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

The function should only modify the array. It should not return anything.

For instance:

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

alert( arr ); // [3, 1] */
function filterRangeInPlace(arr2, a, b) {

  for (let i = 0; i < arr2.length; i++) {
    const fnd = arr2[i];

    if (fnd < a || fnd > b) {
      arr2.splice(i, 1);
      i--;
    }
  }

}

const arr2 = [7, 14, 5, 1];

filterRangeInPlace(arr2, 1, 7);
console.log(`filter in plase is ${arr2}`);

//---------------- 
/**Sort in decreasing order */
function sortDescending(array) {

  array.sort((a, b) => b - a);

  console.log(array);

}

sortDescending([5, 2, 1, -10, 8]);
sortDescending([38, -8, -1, -10, 81]);
sortDescending([5, 42, 0, -10, -8]);
sortDescending([475, 214, -541, -10, 8, 0, 14, -74]);

//----------------
/**We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

Create a function copySorted(arr) that returns such a copy.

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes) */
function copySorted(arrStrSort) {

  arrStrSort.sort();
  console.log(arrStrSort);

}

copySorted(['HTML', 'JavaScript', 'CSS']);
copySorted(['Lorem', 'Ipsum', 'is', 'simply', 'dummy']);

//-----------------
/**Create a constructor function Calculator that creates “extendable” calculator objects.

The task consists of two parts.

First, implement the method calculate(str) that takes a string like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited) and returns the result. Should understand plus + and minus -.

Usage example:

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10 */
function Calculator() {

  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function (str) {

    const split = str.split(' '),
      a = +split[0],
      operator = split[1],
      b = +split[2]

    if (!this.methods[operator] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[operator](a, b);
  }

  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}

//---------------
/**You have an array of user objects, each one has user.name. Write the code that converts it into an array of names. */
const daniel = {
    name: 'Daniel',
    age: 25
  },
  petya = {
    name: 'Petya',
    age: 30
  },
  darya = {
    name: 'Darya',
    age: 28
  };

const users = [daniel, petya, darya];

const names = users.map(item => item.name);

console.log(names);

//---------------
/**You have an array of user objects, each one has name, surname and id.

Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname. */
const ani = {
  name: 'Ani',
  surname: 'Andreasyan',
  id: 1
};
const haykuhi = {
  name: 'Haykuhi',
  surname: 'Tumanyan',
  id: 2
};
const hayk = {
  name: 'Hayk',
  surname: 'Aramyan',
  id: 3
};

const allUsers = [ani, haykuhi, hayk];

const usersMapped = allUsers.map(item => ({
  fullName: `${item.name} ${item.surname}`,
  id: item.id
}));

// usersMapped = [
//   { fullName: usersMapped[0], id: 1 },
//   { fullName: usersMapped[1], id: 2 },
//   { fullName: usersMapped[2], id: 3 }
// ]

console.log('user id', usersMapped[0].id) // 1
console.log('user name', usersMapped[0].fullName) // Ani Andreasyan

//---------------
/**Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age. */
const sortByAge = function () {
  arrUsers.sort((a, b) => a.age > b.age ? 1 : -1);
}
const lilith = {
  name: 'Lilith',
  age: 47
};
const anahit = {
  name: 'Anahit',
  age: 27
};
const taron = {
  name: 'Taron',
  age: 37
};

const arrUsers = [lilith, anahit, taron];

sortByAge(arrUsers)

console.log(arrUsers[0].name);
console.log(arrUsers[1].name);
console.log(arrUsers[2].name);

//---------------
/**Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

Multiple runs of shuffle may lead to different orders of elements. For instance:

let arr = [1, 2, 3];

shuffle(arr);
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]
// ... */
function shuffle(arrShuffle) {

  arrShuffle.sort(() => Math.random() - 0.5);;

  console.log(arrShuffle);

}

shuffle([1, 2, 3]);
shuffle([1, 2, 3]);

//---------------
/**Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

The formula for the average is (age1 + age2 + ... + ageN) / N.
 */
function getAverageAge() {
  return usr.reduce((age, usr) => age + usr.age, 0) / usr.length;
}

const narek = {
  name: 'Narek',
  age: 24
};
const karen = {
  name: 'Karen',
  age: 34
};
const vardan = {
  name: 'Vardan',
  age: 44
};

const usr = [narek, karen, vardan];


console.log(getAverageAge(usr));

//---------------
/*Let arr be an array.

Create a function unique(arr) that should return an array with unique items of arr.*/
function unique(arrStr) {
  const result = [];

  for (let str of arrStr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

const strings = ['Lorem', 'Lorem', 'Lorem', 'Ipsum', 'Ipsum', 'Contrary', 'to'];

console.log(unique(strings));

//---------------
const arrSum = [11, 12, 13, 14, 13];

const sumArray = arrSum.reduce((sum, current) => sum + current, 0);

console.log('Sum Array is', sumArray);

//---------------
const arrAy = [11, 12, 13, 14, 15];

for (let i = 0; i < arrAy.length; i++) {
  if (i % 2 === 0) {
    console.log(arrAy[i]);
  }
}

//---------------
/**Filter unique array members */
const values = ['Hare', 'Krishna', 'Hare', 'Krishna',
  'Krishna', 'Krishna', 'Hare', 'Hare', ':-O'
];

function unique(ununiqueArr) {
  return Array.from(new Set(ununiqueArr));
}

console.log(unique(values)); // Hare,Krishna,:-O

//--------------
/**Filter anagrams */
function aclean(arrAnagram) {
  let map = new Map();

  for (let word of arrAnagram) {
    let sorted = word.toLowerCase().split("").sort().join("");
    map.set(sorted, word);
  }

  return Array.from(map.values());
}

let arrAnagram = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arrAnagram));

//--------------
/**Iterable keys */
let map = new Map();

map.set('name', 'Joseph');

let keys = Array.from(map.keys());

keys.push('more');

console.log(keys);

//---------------
/**There is a salaries object with arbitrary number of salaries.

Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and the for..of loop.

If salaries is empty, then the result must be 0 */
const salaries = {
  'John': 100,
  'Larry': 300,
  'Sona': 250,
  'Samvel': 400
};


function sumSalaries(salaries) {
  let sum = 0;
  for (let sal of Object.values(salaries)) {
    sal = ++sal;
    sum += sal;
  }
  return sum;
}

console.log(sumSalaries(salaries)); //1054

//---------------
/**Write a function count(obj) that returns the number of properties in the object: */
const userCount = {
  'John': 100,
  'Larry': 300,
  'Sona': 250,
  'Samvel': 400,
  name: 'Bob',
  age: 33,
  isrobot: false
};


function countIs(userCount) {
  let count = 0;
  for (let value of Object.values(userCount)) {
    count++;
  }
  return count;
}

console.log(countIs(userCount)); //7

//--------------
let userIs = {
  name1: 'Justin',
  years: 22
};

let {
  name1: name1,
  years: age,
  isAdmin = false
} = userIs;

console.log(name1); // Justin
console.log(age); // 22
console.log(isAdmin); // false