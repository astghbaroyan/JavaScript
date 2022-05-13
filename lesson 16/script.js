/**Astghik Baroyan */
'use strict'

/**Hide on click
Add JavaScript to the button to make <div id="text"> disappear when we click it. */
const hideText = document.getElementById('hideText');
const text = document.getElementById('text');
hideText.onclick = function() {
    text.hidden = true;
}
//---------------

/**Hide self
Create a button that hides itself on click.  */
const hideSelf = document.getElementById('hideSelf');
hideSelf.onclick = function(){
    hideSelf.hidden = true;
}
//---------------

/**Which handlers run?
There’s a button in the variable. There are no handlers on it.
Which handlers run on click after the following code? Which alerts show up?
*button.addEventListener("click", () => alert("1"));
*button.removeEventListener("click", () => alert("1"));
*button.onclick = () => alert(2); */
//Answer: 1 and 2.
//----------------

/**Create a sliding menu
Create a menu that opens/collapses on click:
Sweeties (click me)!
*Cake
*Donut
*Honey
 */
const sweetList = document.getElementById('sweetList');
const ulClick = document.getElementById('ulClick');
sweetList.onclick = function () {
    sweetList.classList.toggle('open');
    // ulClick.hidden = true;
}
