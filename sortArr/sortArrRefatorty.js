const fou = (a) => {
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (a[i] + a[j] === 3) {
        return [a[i], a[j]];
      }
    }
  }
};
console.log(fou([0, -1, 1, 2, 3, 4, 2, 4]));
