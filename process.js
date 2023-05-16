///The process core global object, allows the user to create command line arguements, allowing the harvesting of parameters for the command line.
///it can be accessed within any module, it also provides various properties to interact with and can prove to be a gateway between node and CLI

///This process will count and display the amount of arguements made within the console, if nothing other than node process is used, it will display 2 arguements, feel free to add more and see the magic.
const process = require("process");
var args = process.argv;
console.log("The number of arguments is " + args.length);
args.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});
/// The process stdout will allow the developer to write something that will display in the console.
process.stdout.write("Hello User, tell me your name:");
/// The process stdin allows the user to input data from the console
process.stdin.on("data", (data) => {
  console.log(`Your Name is: ${data.toString()}Thank you.`);
  process.exit();
});
