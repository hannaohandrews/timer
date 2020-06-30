//Implement an alarm clock / timer which will beep after a specified amount of time has passed. 
//The user can specify an unlimited number of alarms using command line arguments


// setTimeout(() => {
//   console.log('th3r3');
// }, 1000);



var myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs);

for (let i = 0 ; i < myArgs.length ; i++ ) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, myArgs[i] * 1000);
};



