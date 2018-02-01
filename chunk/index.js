// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    const chunked = [];
    let index = 0;
    while(index < array.length) {
        chunked.push(array.slice(index, index + size));
        index += size;
    }
    return chunked;
}
// function chunk(array, size) {
//     let result = [];
//     for(let element of array) {
//         const last = result[result.length - 1];
//         if(!last || last.length === size) {
//             result.push([element]);
//         } else {
//             last.push(element);
//         }
//     }
//     return result;
// }

// function chunk(array, size) {
//     let result = [];
//     let arrSize = array.length;
//     let chunkIndex = 0;
//     let chunk = [];

//     for( let i = 0; i < arrSize; i++ ) {
//         if( chunkIndex === size ){
//             result.push(chunk);
//             chunk = [];
//             chunkIndex = 0;
//             chunk[chunkIndex] = array[i];
//             ++chunkIndex;
//         } else {
//             chunk[chunkIndex] = array[i];
//             chunkIndex++;
//         }
//         if( i + 1 === arrSize )
//             result.push(chunk);
//     }
//     return result;
// }

module.exports = chunk;
