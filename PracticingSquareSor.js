function sortTheSquareVu(num1, num2) {
  if (num1.length !== num2.length) {
    return false;
  }

  for (let i = 0; i < num1.length; i++) {
    // need to check index num 1 in index 2
    let checkIndexValue = num2.indexOf(num1[i] ** 2);

    if (checkIndexValue === -1) {
      return false;
    }
    console.log(num2);
    num2.splice(checkIndexValue, 1);
  }
  return true;
}

console.log(sortTheSquareVu([1, 2, 3, 2], [1, 2, 9, 4]));
