
let myArgs = process.argv.slice(2);
// console.log('myArgs: ', myArgs);

for (let i = 0; i < myArgs.length; i++) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, myArgs[i] * 1000);
}



