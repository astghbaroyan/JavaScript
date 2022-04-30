/**Astghik Baroyan */
"use strict";

function go() {
  showCircle(150, 550, 100, (div) => {
    div.classList.add("message-ball");
    div.append("Armenia!");
  });
}

function showCircle(cx, cy, radius, callback) {
  let div = document.createElement("div");
  div.style.width = 0;
  div.style.height = 0;
  div.style.left = cx + "px";
  div.style.top = cy + "px";
  div.className = "circle";
  document.body.append(div);

  setTimeout(() => {
    div.style.width = radius * 2 + "px";
    div.style.height = radius * 2 + "px";

    div.addEventListener("transitionend", function handler() {
      div.removeEventListener("transitionend", handler);
      callback(div);
    });
  });
}
// function showCircle(cx, cy, radius) {
//   let div = document.createElement('div');
//   div.style.width = 0;
//   div.style.height = 0;
//   div.style.left = cx + 'px';
//   div.style.top = cy + 'px';
//   div.className = 'circle';
//   document.body.append(div);

//   return new Promise(resolve => {
//     setTimeout(() => {
//       div.style.width = radius * 2 + 'px';
//       div.style.height = radius * 2 + 'px';

//       div.addEventListener('transitionend', function handler() {
//         div.removeEventListener('transitionend', handler);
//         resolve(div);
//       });
//     }, 0);
//   })
// }

//-----------------

let promise = new Promise(function (resolve) {
  resolve(1); // 1

  setTimeout(() => resolve(2), 3000);
});

promise.then(console.log);
//----------------

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
delay(2000).then(() => console.log("executed in 2 seconds"));
//----------------

new Promise(function (resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 3000);
}).catch(console.log);
//----------------

async function loadJson(url) {
  let response = await fetch(url);

  if (response.status == 200) {
    let json = await response.json();
    return json;
  }

  throw new Error(response.status);
}

loadJson("no-such-user.json").catch(console.log); // Error: 404
//---------------

class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = "HttpError";
    this.response = response;
  }
}

async function loadJson1(url) {
  let response = await fetch(url);
  if (response.status == 200) {
    let json = await response.json();
    return json;
  } else {
    throw new HttpError(response);
  }
}

async function demoGithubUser() {
  let user;
  while (true) {
    let name = prompt("Enter login?", "astgh");

    try {
      user = await loadJson1(`https://api.github.com/users/${name}`);
      break;
    } catch (err) {
      if (err instanceof HttpError && err.response.status == 404) {
        console.log("This user does not exist, please try again.");
      } else {
        throw err;
      }
    }
  }

  console.log(`Full name: ${user.name}.`);
  return user;
}

demoGithubUser();
//---------------

async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return 10;
}

function f() {
  
  wait().then(result => console.log(result));
}

f();