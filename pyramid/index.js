// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    const printChar = '#';
    const paddingChar = ' ';
    const maxCol = 2*n - 1;

    for( let i = 0; i < n; i++ ){
        let spaces = Math.floor(maxCol/2 - i);
        let hashes = maxCol - spaces*2;
        console.log(paddingChar.repeat(spaces) + printChar.repeat(hashes) + paddingChar.repeat(spaces));
    } 

}
module.exports = pyramid;
