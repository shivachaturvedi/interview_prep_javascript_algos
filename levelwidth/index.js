  // --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    let returnArray = [0];
    let stopper = 'STOPPER';
    let serviceArray = [root, stopper];

    while( serviceArray.length > 1 ) {
        let element = serviceArray.shift();
        if( element === stopper ) {
            returnArray.push(0);
            serviceArray.push(stopper);
        } else {
            returnArray[returnArray.length - 1]++;
            serviceArray.push(...element.children);
        }

    }
    return returnArray;
}

module.exports = levelWidth;
