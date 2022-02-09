//  =================   Sliding window ================= //

// this pattern involves creating a window which can either be an array or number from one position to anthoer

//Depending on a certain condition, the window either increases or closes (and a new window is created)

// very usefun for keeping track of a subset of data in an array/string

//      =========       An Example      ========== //
// Write a function called maxSubarraySum which accepts an array of integer and a number called N. The function should calculate the maximun sum of N consecutive elements in the array

// maxSubarraySum([1,2,5,2,8,1,5],2) // 10
// maxSubarraySum([1,2,5,2,8,1,5],4) // 17
// maxSubarraySum([4,2,1,6],2) // 6
// maxSubarraySum([4,2,1,6,2],1) // 13
// maxSubarraySum([],4) // null

function maxSubarraySum(arr, num) {
  // if num is greater then arr return null
  if (num > arr.length) {
    return null;
  }
  // max to nagative inifinity
  let max = -Infinity;
  //   loop through arr property
  for (let i = 0; i < arr.length - num + 1; i++) {
    //   by default is zero
    temp = 0;
    for (let j = 0; j < num; j++) {
      // add i and j to the temp variable
      temp += arr[i + j];
    }
    // if temp is greater then max
    if (temp > max) {
      // update max
      max = temp;
    }
    console.log(temp, max);
  }
  return max;
}

maxSubarraySum([2, 6, 9, 2, 8, 1, 5, 6, 3], 2); // 10

function maxSubarraySum2(arr, num) {
  let maxSum = 0;
  let tempSum = 0;

  // if num is greater then arr return null
  if (num > arr.length) {
    return null;
  }

  for (let i = 0; i < arr.length - num + 1; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    // if tempSum is greater then maxSum, update to maxSum, same as line 34
    maxSum = Math.max(maxSum, tempSum);
    console.log(maxSum);
  }
  return maxSum;
}

maxSubarraySum2([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
