/**Astghik Baroyan */
'use strict'

/*Create a Date object for the date: Feb 20, 2012, 3:12am. The time zone is local.*/
const date = new Date(2012, 1, 20, 3, 12, 0, 0);
console.log(date);
//-------------

/*Write a function getWeekDay(date) to show the weekday in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.*/
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

/*European countries have days of week starting with Monday (number 1), then Tuesday (number 2) and till Sunday (number 7). Write a function getLocalDay(date) that returns the “European” day of week for date.*/
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

/**Create a function getDateAgo(date, days) to return the day of month days ago from the date.

For instance, if today is 20th, then getDateAgo(new Date(), 1) should be 19th and getDateAgo(new Date(), 2) should be 18th.

Should work reliably for days=365 or more:*/
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

/**Write a function getLastDayOfMonth(year, month) that returns the last day of month. Sometimes it is 30th, 31st or even 28/29th for Feb.

Parameters:

year – four-digits year, for instance 2012.
month – month, from 0 to 11.
For instance, getLastDayOfMonth(2012, 1) = 29 (leap year, Feb). */
function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);

  return date.getDate();
}

console.log('Last day of month is:', getLastDayOfMonth(2012, 1)); //29
console.log('Last day of month is:', getLastDayOfMonth(2022, 2)); //31
console.log('Last day of month is:', getLastDayOfMonth(2022, 1)); //28
//-----------------

/**Write a function getSecondsToday() that returns the number of seconds from the beginning of today.

For instance, if now were 10:00 am, and there was no daylight savings shift, then: */
function getSecondsToday() {
  let date = new Date();
  return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
}

console.log(getSecondsToday(), 'seconds have passed since today');
//---------------

/**Create a function getSecondsToTomorrow() that returns the number of seconds till tomorrow.

For instance, if now is 23:00, then: */
function getSecondsToTomorrow() {
  let now = new Date();

  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

  let mlscnd = tomorrow - now;
  return Math.round(mlscnd / 1000);

}

console.log(getSecondsToTomorrow(), 'seconds left until tomorrow');
//---------------


/**Write a function formatDate(date) that should format date as follows:

If since date passed less than 1 second, then "right now".
Otherwise, if since date passed less than 1 minute, then "n sec. ago".
Otherwise, if less than an hour, then "m min. ago".
Otherwise, the full date in the format "DD.MM.YY HH:mm". That is: "day.month.year hours:minutes", all in 2-digit format, e.g. 31.12.16 10:00. */
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

/**Turn the user into JSON and then read it back into another variable. */
let user = {
  name: 'Narine Hovhannisyan',
  age: 75
};

user = JSON.stringify(user)

console.log(user); // {"name":"Hovhannes Hovhannisyan","age":75}

user = JSON.parse(user);

console.log(user.name); //Narine Hovhannisyan
//--------------

/**In simple cases of circular references, we can exclude an offending property from serialization by its name.

But sometimes we can’t just use the name, as it may be used both in circular references and normal properties. So we can check the property by its value.

Write replacer function to stringify everything, but remove properties that reference meetup: */
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