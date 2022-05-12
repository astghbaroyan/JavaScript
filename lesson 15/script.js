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

//---------------
console.log(document.body);
console.dir(document.body);
console.log(document.head);
console.dir(document.head);
console.log(document);
console.dir(document);
//---------------

/*Count descendants
There’s a tree structured as nested ul/li.
Write the code that for each <li> shows:
What’s the text inside it (without the subtree)
The number of nested <li> – all descendants, including the deeply nested ones.*/
for (let li of document.querySelectorAll('li')) {
  // get the title from the text node
  const title = li.firstChild.data;

  // get the descendants count
  const count = li.getElementsByTagName('li').length;

  console.log(title + ': ' + count);
}
//-----------------

/**Get the attribute

Write the code to select the element with data-widget-name attribute from the document and to read its value.

<!DOCTYPE html>
<html>
<body>

  <div data-widget-name="menu">Choose the genre</div>

  <script>
    /* your code //
  </script>
  </body>
  </html> */

for (let div of document.querySelectorAll('[data-widget-name]')) {

  let attr = div.getAttribute('data-widget-name');

  console.log(attr);
}

const attr = document.querySelector('[data-widget-name]');
console.log(attr.dataset.widgetName);
console.log(attr.getAttribute('data-widget-name'));
//-----------------

/** Make external links orange
Make all external links orange by altering their style property.
A link is external if:

Its href has :// in it
But doesn’t start with http://internal.com.
Example:

<a name="list">the list</a>
<ul>
  <li><a href="http://google.com">http://google.com</a></li>
  <li><a href="/tutorial">/tutorial.html</a></li>
  <li><a href="local/path">local/path</a></li>
  <li><a href="ftp://ftp.com/my.zip">ftp://ftp.com/my.zip</a></li>
  <li><a href="http://nodejs.org">http://nodejs.org</a></li>
  <li><a href="http://internal.com/test">http://internal.com/test</a></li>
</ul>

<script>
  // setting style for a single link
  let link = document.querySelector('a');
  link.style.color = 'orange';
</script>*/
let links = document.querySelectorAll('a');
for (let link of links) {
  let href = link.getAttribute('href');
  if (!href) continue;

  if (!href.includes('://')) continue;

  if (href.startsWith('http://internal.com')) continue;
  link.style.color = 'orange';
}
const link = document.querySelector('a');
link.style.color = 'orange';
//---------------

/***createTextNode vs innerHTML vs textContent
We have an empty DOM element elem and a string text.
Which of these 3 commands will do exactly the same?

elem.append(document.createTextNode(text))
elem.innerHTML = text
elem.textContent = text */

// let textNode1 = document.createTextNode('Hello');
// console.log(textNode1);

// let p = document.createElement('p');
// p.innerHTML = "<strong>Hello</strong>";
// console.log(p);

// let secondP = document.createElement('p');
// secondP.innerHTML = 'append';
// document.body.append(secondP); 
// console.log(secondP);

const text = '<h4> Text for task:createTextNode vs innerHTML vs textContent </h4>'
p1.append(document.createTextNode(text));
p2.innerHTML = text;
p3.textContent = text;
//------------------

/**Clear the element
importance: 5
Create a function clear(elem) that removes everything from the element.

<ol id="elem">
  <li>Hello</li>
  <li>World</li>
</ol>

<script>
  function clear(elem) { // your code // }

  clear(elem); // clears the list
  </script> */

function clear(elementOl) {
  elementOl = document.getElementById('elementOl');
  setTimeout(() => elementOl.remove(), 2000);
}

clear(elementOl);
//---------------

/**Why does "aaa" remain?
importance: 1
In the example below, the call table.remove() removes the table from the document.

But if you run it, you can see that the text "aaa" is still visible.

Why does that happen?

<table id="table">
  aaa
  <tr>
    <td>Test</td>
  </tr>
</table>

<script>
  alert(table); // the table, as it should be

  table.remove();
  // why there's still "aaa" in the document?
</script> */

/**The browser has to fix it automatically. But there may be no text inside the <table>: according to the spec only table-specific tags are allowed. So the browser shows "aaa" before the <table>.
 * <table id="secondTable">
  <tr><td>aaa</td></tr>
  <tr>
    <td>Test</td>
  </tr>
</table>
 */
const table = document.getElementById('secondTable')
console.log(table); // the table, as it should be

setTimeout(() => table.remove(),2000);
//-----------------

/**Create a list
Write an interface to create a list from user input.

For every list item:

Ask a user about its content using prompt.
Create the <li> with it and add it to <ul>.
Continue until the user cancels the input (by pressing Esc or via an empty entry).
All elements should be created dynamically.

If a user types HTML-tags, they should be treated like a text. */ 
// let ul = document.createElement('ul');
// document.body.append(ul);

// while (true) {
//   //let data = prompt('add content for tag UL','');

//   if (!data) {
//     break;
//   }

//   let li = document.createElement('li');
//   li.textContent = data;
//   ul.append(li);
// }
//------------------

/**Create a tree from the object
Write a function createTree that creates a nested ul/li list from the nested object.
For instance:

let data = {
  "Fish": {
    "trout": {},
    "salmon": {}
  },

  "Tree": {
    "Huge": {
      "sequoia": {},
      "oak": {}
    },
    "Flowering": {
      "apple tree": {},
      "magnolia": {}
    }
  }
};
The syntax:

let container = document.getElementById('container');
createTree(container, data); // creates the tree in the container
The result (tree) should look like this:

Choose one of two ways of solving this task:
Create the HTML for the tree and then assign to container.innerHTML.
Create tree nodes and append with DOM methods. */

//method 1
const ul1 = document.createElement('ul');
document.body.append(ul1);
const fish = document.createElement('li');
fish.innerHTML = 'Fish';
ul1.append(fish);
const ul2 = document.createElement('ul');
fish.append(ul2);
const trout = document.createElement('li');
trout.innerHTML = 'trout';
ul2.append(trout);
const salmon = document.createElement('li');
salmon.innerHTML = 'salmon';
ul2.append(salmon);
const tree = document.createElement('li');
tree.innerHTML = 'Tree';
ul1.append(tree);
const ul3 = document.createElement('ul');
tree.append(ul3);
const huge = document.createElement('li');
huge.innerHTML = 'Huge';
ul3.append(huge);
const ul4 = document.createElement('ul');
huge.append(ul4);
const sequoia = document.createElement('li');
sequoia.innerHTML = 'sequoia';
ul4.append(sequoia);
const oak = document.createElement('li');
oak.innerHTML = 'oak';
ul4.append(oak);
const flowering = document.createElement('li');
flowering.innerHTML = 'Flowering';
ul3.append(flowering);
const ul5 = document.createElement('ul');
flowering.append(ul5);
const appleTree = document.createElement('li');
appleTree.innerHTML = 'apple tree';
ul5.append(appleTree);
const magnolia = document.createElement('li');
magnolia.innerHTML = 'magnolia';
ul5.append(magnolia);

//method 2
const container = document.getElementById('container');
const fish1 = document.createElement('li');
fish1.innerHTML = 'Fish';
container.insertBefore(fish1, container.children[0]);
const ul6 = document.createElement('ul');
fish1.append(ul6);
const trout2 = document.createElement('li');
trout2.innerHTML = 'trout';
ul6.insertBefore(trout2, ul6.children[0]);
const salmon2 = document.createElement('li');
salmon2.innerHTML = 'salamon';
ul6.insertBefore(salmon2, ul6.children[1]);
const tree1 = document.createElement('li');
tree1.innerHTML = 'Tree';
container.insertBefore(tree1, container.children[1]);
const ul7 = document.createElement('ul');
tree1.append(ul7);
const huge1 = document.createElement('li');
huge1.innerHTML = 'Huge';
ul7.insertBefore(huge1, ul7.children[0]);
const ul8 = document.createElement('ul');
huge1.append(ul8);
const sequoia1 = document.createElement('li');
sequoia1.innerHTML = 'sequoia';
ul8.insertBefore(sequoia1, ul8.children[0]);
const oak1 = document.createElement('li');
oak1.innerHTML = 'oak';
ul8.insertBefore(oak1, ul8.children[1]);
const flowering1 = document.createElement('li');
flowering1.innerHTML = 'Flowering';
ul7.insertBefore(flowering1, ul7.children[1]);
const ul9 = document.createElement('ul');
flowering1.append(ul9);
const appleTree1 = document.createElement('li');
appleTree1.innerHTML = 'apple tree';
ul9.insertBefore(appleTree1, ul9.children[0]);
const magnolia1 = document.createElement('li');
magnolia1.innerHTML = 'magnolia';
ul9.insertBefore(magnolia1, ul9.children[1]);

//method 3
const data = {
  "Fish": {
    "trout": {},
    "salmon": {}
  },

  "Tree": {
    "Huge": {
      "sequoia": {},
      "oak": {}
    },
    "Flowering": {
      "apple tree": {},
      "magnolia": {}
    }
  }
};

function createTree(container, obj) {
  container.append(createTreeDom(obj));
}

function createTreeDom(obj) {
  // if there's no children, then the call returns undefined
  // and the <ul> won't be created
  if (!Object.keys(obj).length) return;

  let ul = document.createElement('ul');

  for (let key in obj) {
    let li = document.createElement('li');
    li.innerHTML = key;

    let childrenUl = createTreeDom(obj[key]);
    if (childrenUl) {
      li.append(childrenUl);
    }

    ul.append(li);
  }

  return ul;
}

// let container = document.getElementById('container');
// createTree(container, data);

//method 4
function createTree(container, obj) {
  container.innerHTML = createTreeText(obj);
}

function createTreeText(obj) { // standalone recursive function
  let li = '';
  let ul;
  for (let key in obj) {
    li += '<li>' + key + createTreeText(obj[key]) + '</li>';
  }
  if (li) {
    ul = '<ul>' + li + '</ul>'
  }
  return ul || '';
}

//createTree(container, data);
//------------------

/**Show descendants in a tree
There’s a tree organized as nested ul/li.
Write the code that adds to each <li> the number of its descendants. Skip leaves (nodes without children).*/