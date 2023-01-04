const prompt = require('prompt-sync')();
const a = parseInt(prompt('Enter the first number = ')); 
const b = parseInt(prompt('Enter the second number = '));
function euclidSubtract(a, b) {
    let steps = 0;
    
    while (a !== b) {
    steps++;
    if (a > b) {
        a -= b;
      } else {
        b -= a;
      }
    }

    console.log('The time complexity of Euclids Algorithm by subtraction is = ', steps);
    }
    
    euclidSubtract(a, b);
    
    
