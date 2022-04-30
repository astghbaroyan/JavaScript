/**Astghik Baroyan */
"use strict";

function f() {
  try {
    console.log("start");
    return "result";
  } catch (e) {
    /// code...
  } finally {
    console.log("cleaning!");
  }
}

f(); // cleaning!

function f1() {
  try {
    console.log("start");
    //throw new Error('my error');
  } catch (e) {
    // ...
    if (`can't handle error`) {
      throw e;
    }
  } finally {
    console.log("cleaning!");
  }
}

f1(); // cleaning!
//----------------

class SyntaxError {
  constructor(message) {
    this.message = message;
    this.name = "Syntax Error";
    this.stack = "Stack";
  }
}

class FormatError extends SyntaxError {
  constructor(message) {
    super(message);
    this.name = "Format Error";
  }
}

let err = new FormatError("Formatting error");

console.log(err.message); // formatting error
console.log(err.name); // FormatError
console.log(err.stack); // stack

console.log(err instanceof FormatError); // true
console.log(err instanceof SyntaxError); // true
//--------------

// function discriminant(a, b, c) {
//   let D = b ** 2 - 4 * a * c;
//   //console.log(D);
//   try {
//      if (D = 0) {
//       let x1 = (-b / 2) * a;
//       console.log(x1);
//      }
//     else if (D < 0) {
//       throw new Error("the number is negative");
   
//     } else if (D > 0) {
//       console.log(((-b + Math.sqrt(D)) / 2) * a);
//       console.log(((-b - Math.sqrt(D)) / 2) * a);
//     }
//   } catch (Error) {
//     if ((Error.name = Error)) {
//       console.log("Error: " + Error.message);
//     }
//   }
// }

// discriminant(4, 2, 6);
// discriminant(1, 2, 1);
// discriminant(1, 5, 3);
