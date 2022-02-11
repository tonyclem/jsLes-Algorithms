//          Chanllenge          //

// Write a function called sameFrequency. Given two positive integers, find out if the two number have the same frequency of digits

// sameFrequency(182, 281) // true
// sameFrequency(34, 14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22, 222) // true

function sameFrequency(num1, num2) {
  let strNum1 = num1;
  let strNum2 = num2;

  // firstly we need to check if num1[i] and num[i] is'nt true
  if (strNum1.length !== strNum2.length) {
    return false;
  }
  // Declearing countNum an empty object
  let countNum1 = {};
  let countNum2 = {};

  // create a loop that we loop through
  for (let i = 0; i < strNum1.length; i++) {
    countNum1[strNum1[i]] = countNum1[strNum1[i]] || +1;
  }

  for (let j = 0; j < strNum1.length; j++) {
    countNum2[strNum2[i]] = countNum2[strNum2[i]] || +1;
  }

  for (let key in countNum1) {
    if (countNum1[key] !== countNum2[key]) {
      return false;
    }
  }

  return true;
}

console.log(sameFrequency(182427, 42816));
