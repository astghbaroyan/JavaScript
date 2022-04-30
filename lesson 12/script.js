/**Astghik Baroyan */
'use strict';

class Clock {
  constructor(template) {
    let timer;

    function render() {
      let date = new Date();

      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;

      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;

      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;

      let output = template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);

      console.log(output);
    }

    this.stop = function () {
      clearInterval(timer);
    };

    this.start = function () {
      render();
      timer = setInterval(render, 1000);
    };
  }
}

// let clock = new Clock("h:m:s");
// clock.start();
//--------------

class Animal {

  constructor(name) {
    this.name = name;
  }

}

class Rabbit extends Animal {
  constructor(name) {
    super(name);
    this.created = Date.now();
  }
}

let rabbit = new Rabbit('White Rabbit');
console.log(rabbit.name);
//---------------

class ExtendedClock extends Clock {
  constructor(template) {
    super(template);
    let {
      precision = 1000
    } = template;
    this.precision = precision;
  }
  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  };
}

// let clock = new Clock("h:m:s");
// clock.start();
//----------------

class Rabbit1 {
  constructor(name) {
    this.name = name;
  }
}

let rabbit1 = new Rabbit1("Rab");


console.log(rabbit1.hasOwnProperty('name')); // true

class Rabbit2 extends Object {

  constructor(name) {
    super(name);
    this.name = name;
  }
}

let rabbit2 = new Rabbit2('Robby');

console.log(rabbit2.hasOwnProperty('name')); // true
//---------------

function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

console.log( a instanceof B ); // true
//----------------

