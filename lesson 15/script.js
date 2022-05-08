/**Astghik Baroyan */
"use strict";

/*Look at this page:

<html>
<body>
  <div>Users:</div>
  <ul>
    <li>John</li>
    <li>Pete</li>
  </ul>
</body>
</html>
For each of the following, give at least one way of how to access them:

*The <div> DOM node?
*The <ul> DOM node?
*The second <li> (with Pete)?*/

console.log("document.body.children[0],  document.body.firstElementChild");
console.log("document.body.children[1],  document.body.lastElementChild");
console.log("document.body.lastElementChild.lastElementChild");
const td1 = table1.rows[0].cells[0];
const td2 = table1.rows[1].cells[1];
const td3 = table1.rows[2].cells[2];
const td4 = table1.rows[3].cells[3];
const td5 = table1.rows[4].cells[4];

td1.style.backgroundColor = "red";
td2.style.backgroundColor = "red";
td3.style.backgroundColor = "red";
td4.style.backgroundColor = "red";
td5.style.backgroundColor = "red";
//---------------


/*How to find?…

*The table with id="age-table".
*All label elements inside that table (there should be 3 of them).
*The first td in that table (with the word “Age”).
*The form with name="search".
*The first input in that form.
*The last input in that form.*/
const ageTable = document.getElementById('age-table');
console.log('The table with id="age-table:', ageTable);

const elementsLabel = document.getElementsByTagName('label');
console.log('All label elements inside that table:', elementsLabel);

const ageTble = document.getElementById('age-table').querySelectorAll('tr > td:first-child')[0];
console.log('The first td in that table (with the word “Age”):', ageTble);

const formName = document.getElementsByName('search')[0]
console.log('he form with name="search"', formName);

const firstInput = document.querySelector('input');
console.log('The first input in that form:', firstInput);

const lastInput = document.getElementsByName('info[2]');
console.log('The last input in that form:', lastInput);