const same = (num1, num2) => {
  if (num1.length !== num2.length) return false;
  for (let i = 0; i < num1.length; i++) {
    // declaring a new variable and compared the index of num2 and num1 square 2 together
    let comparedIndex = num2.indexOf(num1[i] ** 2);
    // if the value -1 mean can't find the value,then return false
    if (comparedIndex === -1) {
      return false;
    }
    console.log(num2);
    num2.splice(comparedIndex, 1);
  }
  return true;
};

// console.log(same([1, 2, 3, 2], [1, 4, 9, 4]));

// let first = num1;
// let second = num2;
// // declaring an If condition to check it the they both have the same value
// if (first.length !== second.length) return false;
// let firstNum = num1[i];
//     firstLookup[firstNum]
// //       ? firstLookup[firstNum] || +1
//       : firstLookup[firstNum] || 0;
//   //}

const same2 = (num1, num2) => {
  // check if num1 isn't match num2
  if (num1.length !== num2.length) return false;
  // lookup
  let firstLookup = {};
  let secondLookup = {};

  for (key1 of num1) {
    firstLookup[key1] = (firstLookup[key1] || 0) + 1;
  }

  for (key2 of num2) {
    secondLookup[key2] = (secondLookup[key2] || 0) + 1;
  }
  console.log(firstLookup);
  console.log(secondLookup);

  for (let key in firstLookup) {
    if (!(key ** 2 in secondLookup)) {
      return false;
    }
    if (secondLookup[key ** 2] !== firstLookup[key]) {
      return false;
    }
  }
  return true;
};

console.log(same2([1, 2, 3, 2], [1, 4, 9, 4]));
