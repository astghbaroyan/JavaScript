let a;
let aa;
function f1() {
  let tiv = "";
  let b = "";
  let i = 1;
  a = Number(document.getElementById("inp").value);
  while (i != 0) {
    if (a % 2 == 1) {
      b = b + 1;
      a = Math.floor(a / 2);
      i++;
    } else {
      b = b + 0;
      a = Math.floor(a / 2);
      i++;
    }
    if (a == 1) {
      i = 0;
    }
  }
  b = b + 1;
  for (let j = b.length - 1; j >= 0; j--) {
    tiv = tiv + b[j];
  }
  document.getElementById("p1").innerHTML = tiv;
}
function f2() {
  let tiv2 = 0;
  let j = 0;
  aa = document.getElementById("inp2").value;
  for (let i = aa.length - 1; i >= 0; i--) {
    tiv2 = tiv2 + Number(aa[j]) * Math.pow(2, i);
    j++;
  }
  document.getElementById("p2").innerHTML = tiv2;
}
