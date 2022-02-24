//  ======== CountUniqueValues ============ //

// implement a function called countUniqueValues which accepts a sorted array, and count the unique values in the array. there can be negative numbers in the array, but it will always be sorted

function countUniqueValues(arr) {
  let i = 0;
  // loop through arr
  for (let j = 1; j < arr.length; j++) {
    // if arr[i] is 'not equal to arr[j]
    if (arr[i] !== arr[j]) {
      // increment i
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValues([1, 2, 3, 4, 5, 6, 7, 8, 8])); // ?

//[1, 1, 1, 2, 2, 3, 4, 5, 5, 5, 6, 7]
// 0 1
// 0 2
// 1 3
// 1 4
// 2 5
// 3 6
// 4 7
// 4 8
// 4 9
// 5 10
// 6 11

// Example
// [1,2,3,4,5,6,7,8,8,]
