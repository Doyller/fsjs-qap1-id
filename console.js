/* Console within node gives a variety of options for working within the terminal/console. Including time, objects, data and more */

console.info("Simple console program to track program efficiency");/// processes write output
console.time("Getting data");///starts a timer 
var x = 4;
var y = 2;
var sum = x + y 
var tot = x * y
console.log('Value of x: ', x)
console.log('Value of y: ', y)
console.log('Sum of x and y: ', sum)
console.log('Total of x * y: ', tot)
console.timeEnd('Getting data');/// ends the timer a prints data 
console.info("Program Ended");/// similar function to console.log, processes write output

const Baseball = [['Blue Jays', 'Bichette'],['Braves', 'Acuna Jr.'], ['Rays', 'Arozarena'], ['Yankees', 'Judge']];
console.info("Some baseball teams and their best players")
console.table(Baseball);/// sets up a table within the console 
