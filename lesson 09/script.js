/**Astghik Baroyan */
"use strict";

function sumArray(numberArray) {
  let newArray = [];

  for (let i = 1; i <= numberArray; i++) {
    newArray.push(i);
  }

  let sum = 0;
  for (let number of newArray) {
    sum += number;
  }
  return sum;
}

console.log(sumArray(1));
console.log(sumArray(2));
console.log(sumArray(3));
console.log(sumArray(4));
console.log(sumArray(55));
console.log(sumArray(100));
console.log(sumArray(100000));
//--------------

function sumRecurs(x) {
  if (x === 1) {
    return 1;
  } else {
    return x + sumRecurs(x - 1);
  }
}

console.log(sumArray(1));
console.log(sumArray(2));
console.log(sumArray(3));
console.log(sumArray(4));
console.log(sumArray(55));
console.log(sumArray(100));
console.log(sumArray(100000));
//--------------

/**Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n. */
function sumTo(n) {
  return (n * (n + 1)) / 2;
}

console.log(sumArray(1));
console.log(sumArray(2));
console.log(sumArray(3));
console.log(sumArray(4));
console.log(sumArray(55));
console.log(sumArray(100));
console.log(sumArray(100000));
//---------------

/**Calculate factorial */
function factorial(n) {
  return n !== 1 ? n * factorial(n - 1) : 1;
}

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
//--------------

/**Fibonacci numbers */
function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

console.log(fib(3)); // 2
console.log(fib(7)); // 13
console.log(fib(77)); // 5527939700884757

function fibonacci(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

console.log(fibonacci(3)); // 2
console.log(fibonacci(7)); // 13
console.log(fibonacci(77)); // 5527939700884757
//---------------

/**Output a single-linked list */
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printList(list) {
  console.log(list.value);

  if (list.next) {
    printList(list.next);
  }
}

printList(list);
//-----------------

/**Output a single-linked list in the reverse order */
function printReverseList(list) {
  if (list.next) {
    printReverseList(list.next);
  }

  console.log(list.value);
}

printReverseList(list);
