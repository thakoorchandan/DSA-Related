var arr = [1, 1, 2, 2, 3, 3, 4, 4, 4, 4, 5, 7, 7, 8, 8, 9, 9, 9];
var n = arr.length;
var maxCount = 0;
var index = -1;
for (i = 0; i < n; i++) {
  var count = 0;
  for (j = 0; j < n; j++) {
    if (arr[i] == arr[j]) {
      count++;
    }
    if (maxCount < count) {
      maxCount = count;
      index = i;
    }
  }
}
if (maxCount > n / 2) {
  console.log(arr[index]);
} else {
  console.log("No Majority Element");
}

// console.log(maxCount);
