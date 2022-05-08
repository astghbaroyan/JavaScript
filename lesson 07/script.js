/**Astghik Baroyan */
'use strict'

const date = new Date(2012, 1, 20, 3, 12, 0, 0);
console.log(date);
//-------------



function getWeekDay(weekDay) {

  let weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return weekDays[weekDay.getDay()];

}

let weekDay = new Date(2012, 0, 3);
console.log(getWeekDay(weekDay)); // Tue

weekDay = new Date(2022, 2, 13);
console.log(getWeekDay(weekDay)); // Sun

weekDay = new Date(1999, 8, 28);
console.log(getWeekDay(weekDay)); // Tue
//---------------



function getLocalDay(localDate) {

  let numWeek = [0, 1, 2, 3, 4, 5, 6];
  return numWeek[localDate.getDay()];

}

let localDate = new Date(2012, 0, 3);
console.log(getLocalDay(localDate)); // 2

localDate = new Date(2022, 2, 14);
console.log(getLocalDay(localDate)); // 1

localDate = new Date(1999, 9, 28);
console.log(getLocalDay(localDate)); // 4
//---------------



function getDateAgo(date, days) {

  date.setDate(date.getDate() - days);
  return date;
}

date = new Date(2015, 0, 2);
console.log(getDateAgo(date, 1)); // 1 Jan 2015

date = new Date(2015, 0, 2);
console.log(getDateAgo(date, 2)); // 31 Dec 2014

date = new Date(2015, 0, 2);
console.log(getDateAgo(date, 365)); // 2 Jan 2014

date = new Date(2022, 2, 14);
console.log(getDateAgo(date, 1)); // 13 Mar 2022

date = new Date(2022, 2, 14);
console.log(getDateAgo(date, 2)); // 12 Mar 2022

date = new Date(2022, 2, 14);
console.log(getDateAgo(date, 365)); // 14 Mar 2021
//---------------------




function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);

  return date.getDate();
}

console.log('Last day of month is:', getLastDayOfMonth(2012, 1)); //29
console.log('Last day of month is:', getLastDayOfMonth(2022, 2)); //31
console.log('Last day of month is:', getLastDayOfMonth(2022, 1)); //28
//-----------------



function getSecondsToday() {
  let date = new Date();
  return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
}

console.log(getSecondsToday(), 'seconds have passed since today');
//---------------



function getSecondsToTomorrow() {
  let now = new Date();

  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

  let mlscnd = tomorrow - now;
  return Math.round(mlscnd / 1000);

}

console.log(getSecondsToTomorrow(), 'seconds left until tomorrow');
//---------------



function formatDate(date) {
  let diff = new Date() - date;

  if (diff < 1000) {
    return 'now';
  }

  let sec = Math.floor(diff / 1000);
  if (sec < 60) {
    return sec + ' seconds ago';
  }

  let minute = Math.floor(diff / 60000);
  if (minute < 60) {
    return minute + ' minutes ago';
  }

  let d = date;
  d = [
    '0' + d.getDate(),
    '0' + (d.getMonth() + 1),
    '' + d.getFullYear(),
    '0' + d.getHours(),
    '0' + d.getMinutes()
  ].map(component => component.slice(-2));


  return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}

console.log(formatDate(new Date(new Date - 1)));

console.log(formatDate(new Date(new Date - 30 * 1000)));

console.log(formatDate(new Date(new Date - 5 * 60 * 1000)));

console.log(formatDate(new Date(new Date - 86400 * 1000)));
//--------------




let user = {
  name: 'Narine Hovhannisyan',
  age: 75
};

user = JSON.stringify(user)

console.log(user); // {"name":"Hovhannes Hovhannisyan","age":75}

user = JSON.parse(user);

console.log(user.name); //Narine Hovhannisyan
//--------------




let room = {
  number: 23
};

let meetup = {
  title: 'Conference',
  occupiedBy: [{
    name: 'Vardanyan'
  }, {
    name: 'Abrahamyan'
  }],
  place: room
};


room.occupiedBy = meetup;
meetup.self = meetup;

console.log(JSON.stringify(meetup, function replacer(key, value) {
  console.log(`${key}: ${value}`);
  return (key !== '' && value === meetup) ? undefined : value;
}));