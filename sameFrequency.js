//          Chanllenge          //

// Write a function called sameFrequency. Given two positive integers, find out if the two number have the same frequency of digits

// sameFrequency(182, 281) // true
// sameFrequency(34, 14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22, 222) // true

function sameFrequency(arr, num) {
  // firstiy we need to check if arr[i] and num[i] is'nt true
  if (arr === num) {
    return true;
  }
  // create a loop that we loop through
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < num.length; j++) {}
  }
}

console.log(sameFrequency([182, 281]));
