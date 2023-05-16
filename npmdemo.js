const moment = require("moment");
let now = moment();

/// some formatting options :
console.log("Manual formatting: " + now.format("MM/DD/YY"));
/// We can also do it this way:
console.log(now.format("MMMM DD, YYYY"));

///if we want to include time. we can do this:
console.log("Date and time: " + now.format("MMMM DD YYYY, h:mm a")); /// you can do different variations to reduce the month to numbers or add seconds in the time

/// we can also use moment to find the start and end of the day from our current time
console.log('Start of day: ' + now.startOf('day').fromNow());
console.log('End of day:  ' + now.endOf('day').fromNow()); 

///if we want to see what day it would be an ex amount of days from now, we would use this:
console.log('add day: ' + now.add(7, 'days').calendar());

///if we want to find the difference between a set date and now, we can use this:
let Birthday = moment('2001-06-03');
let numdays = now.diff(Birthday, 'days');
console.log(`As of today ${now.format('MM/DD/YYYY')}, ${numdays} days have gone by since I was born, ${numdays/365} is how many years since`)

/// I can see how far away my birthday is by using: 
console.log("My birthday is? ")
console.log(moment("2023-06-03", "YYYY-MM-DD").fromNow());

