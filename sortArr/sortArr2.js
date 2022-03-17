const sortArr = (arrVal) => {
  for (let i = 0; i < arrVal.length; i++) {
    for (let j = 0; j < arrVal.length; j++) {
      if (arrVal[i] + arrVal[j] === 2) {
        return [arrVal[i], arrVal[j]];
      }
    }
  }
};
console.log(sortArr([0, -2, 3, 4, 5, 2]));
