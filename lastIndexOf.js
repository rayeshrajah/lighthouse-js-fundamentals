var lastIndexOf = function(arr, num) {
  var temp = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr.length === 0) {
      temp = -1;
    } else if (arr[i] === num) {
      temp = i;
    } else if (i === arr.length - 1 && temp === -1) {
      temp = -1;
    }
  }
  return temp;
};

console.log(lastIndexOf([0, 1, 4, 1, 2], 1), "=?", 3);
console.log(lastIndexOf([0, 1, 4, 1, 2], 2), "=?", 4);
console.log(lastIndexOf([0, 1, 4, 1, 2], 3), "=?", -1);
console.log(lastIndexOf([5, 5, 5], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
