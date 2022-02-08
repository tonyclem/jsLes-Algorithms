// Creating pointer or values that correspond to an index or position and move towards the beginnig, end or middle based on a certain condition
//          =========== Example ============            //
//Write a function called sumZero whichc accepts a sorted array of intergers. The function should find the first pair where the sum is 0. return an array that includes both values that sum to zero or undefined if a pair does not exist

function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

console.log(sumZero([-4, -3, -2, -1, 0, 2, 5]));

// Time complexity - o(n^2)
// Space Complexity - o(1)

//      ==============  Refactor ===================  //

function sumZero2(arr2) {
  let left = 0;
  let right = arr2.length - 1;
  while (left < right) {
    let sum = arr2[left] + arr2[right];
    if (sum === 0) {
      return [arr2[left], arr2[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumZero2([-4, -3, -2, -1, 0, 1, 2, 3, 10]));
