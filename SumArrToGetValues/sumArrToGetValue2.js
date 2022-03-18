let sum = [3, 5, 10, 15, 25];
let rsArr = [];

sum.forEach((s, idx) => {
  let result = 0;
  for (let i = idx + 1; i < sum.length; i++) {
    if (s + sum[i] === 40) {
      result = s += sum[i];
      rsArr.push(result);
    }
  }
});

console.log(rsArr);
