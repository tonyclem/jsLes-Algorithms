// Creating pointer or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition
//          =========== Example ============            //
//Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. return an array that includes both values that sum to zero or undefined if a pair does not exist

function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      // add arr i and j together and check if it equal to 4 the return it
      if (arr[i] + arr[j] === 4) {
        return [arr[i], arr[j]];
      }
    }
  }
}

sumZero([-9, -4, 1, 0, 4, 5]);
// -3, -2, -1, 0, 2, // [-2, 2]
//[-9, -4, 1, 0, 4, 5] // [0,4]
// Time complexity - o(n^2)
// Space Complexity - o(1)

//      ==============  Refactor ===================  //

function sumZero2(arr2) {
  // by default left is zero
  let left = 0;
  // reassign arr2 on variable called right
  let right = arr2.length - 1;
  // is left greater then right ?
  while (left < right) {
    let sum = arr2[left] + arr2[right];
    // if sum is equal to zero return the arr
    if (sum === 0) {
      return [arr2[left], arr2[right]];
      //   if sum is greater than zero minus decrement sum then
    } else if (sum > 0) {
      right--;
    } else {
      //   or plus or increment sum
      left++;
    }
  }
}

// console.log(sumZero2([-10, -2, -3, -1, 0, 1, 2, 3, 10]));
