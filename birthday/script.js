/**Astghik Baroyan */
'use strict'


function getWeekDay(weekDay) {
  
    let weekDays = ['Sunday','Monday','Tuesday',' Wednesday','Thursday','Friday','Saturday'];
    return weekDays[weekDay.getDay()];
     
  }
  
  let weekDay = new Date(1999, 8, 28);
  console.log('My birthday is', getWeekDay(weekDay));  // Tue

