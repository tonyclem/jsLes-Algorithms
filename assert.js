// console.assert(<condition>, if the condition is trusty return true)
let num = 5 === 5;
console.log(num);

console.assert(2 !== 3, "So sorry is not true");

const add = (x, y) => {
  if (typeof x !== "number") {
    return "x is not a number";
  }
  if (typeof y !== "number") {
    return "y is not a number";
  }
  return x + y;
};

// it should add positive numbers
const _1_actual = add(3, 4);
const _1_expected = 8;
console.assert(_1_actual === _1_expected, "Sorry is false");

//   Example
const _checkNum1_ = add(5, 5);
const _checkNum2_ = 11;
console.assert(_checkNum1_ === _checkNum2_, "Not true ");

// Example
const _checkNum1_ = add(6, 5);
const _checkNum2_ = 11;
console.assert(_checkNum1_ === _checkNum2_, "Not true ");
