var loopyLightHouse = function(arr1, arr2, arr3) {
  var start = arr1[0];
  var end = arr1[arr1.length - 1];
  var multi1 = arr2[0];
  var multi2 = arr2[arr2.length - 1];
  var word1 = arr3[0];
  var word2 = arr3[arr3.length - 1];

  for (let i = start; i <= end; i++) {
    if (i % multi1 === 0 && i % multi2 === 0) {
      console.log(word1 + word2);
    } else if (i % multi1 === 0) {
      console.log(word1);
    } else if (i % multi2 === 0) {
      console.log(word2);
    } else {
      console.log(i);
    }
  }
};

loopyLightHouse([15, 90], [2, 5], ["Batty", "Beacon"]);
