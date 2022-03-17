// const list = [1721, 979, 366, 299, 675, 1456];
// let result = [];
// list.forEach((item, idx) => {
//   // We use a for loop here instead of forEach so we only compare the numbers after the current item in the list
//   for (let i = idx + 1; i < list.length; i++) {
//     let takeResult;
//     if (item + list[i] === 2020) {
//       takeResult = item + list[i];
//       result.push(takeResult);
//     }
//   }
// });
// console.log(result);

let num = [5, 20, 50, 10];
let getResult = [];
num.forEach((sumNum, idx) => {
  let result;
  for (let index = idx + 1; index < num.length; index++) {
    if (sumNum + num[index] === 60) {
      result = sumNum + num[index];
      getResult.push(result);
    }
  }
});

console.log(getResult);
