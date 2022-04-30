/**Astghik Baroyan */
'use strict'

function printNumbers1(from, to) {
    let i = from;
  
    let timer = setInterval(function() {
      console.log(i);
      if (i == to) {
        clearInterval(timer);
      }
      i++;
    }, 1000);
  }
  
  
  printNumbers1(4, 8);



function printNumbers2(from, to) {
    let i = from;
  
    setTimeout(function timeSet() {
      console.log(i);
      if (i < to) {
          setTimeout(timeSet, 1000)
        
      }
      i++;
      
    }, 6000);
  }
  
  printNumbers2(12, 16);
  //---------------




  let i = 0;

setTimeout(() => console.log(i), 100); // 100000000


for(let j = 0; j < 100000000; j++) {
  i++;
}
//--------------

