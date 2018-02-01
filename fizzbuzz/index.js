// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
    let count = 1;
    while( count <= n ) {
        console.log(printVal(count));
        count++;
    }
}

function printVal(n) {
    let logVal = n;
        if( logVal % 3 === 0 && logVal % 5 === 0 )
            logVal = 'fizzbuzz';
        else if( logVal % 5 === 0 )
            logVal = 'buzz';
        else if( logVal % 3 === 0 )
            logVal = 'fizz';
        else
            logVal = logVal;

    return logVal;
}
module.exports = fizzBuzz;
