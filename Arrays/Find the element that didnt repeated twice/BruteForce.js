var arr = [7, 3, 5, 4, 5, 3, 4];
var n = arr.length;
for (i = 0; i < n; i++) {
  let count = 1;
  for (j = 0; j < n; j++) {
    if (i != j) {
      if (arr[i] == arr[j]) {
        count++;
      }
    }
  }
  if (count == 1) {
    console.log(arr[i]);
  }
}
