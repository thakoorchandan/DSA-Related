var arr = [7, 3, 5, 4, 5, 3, 4];
var n = arr.length;
var temp = arr[0];
for (i = 1; i < n; i++) {
  temp = temp ^ arr[i];
}

console.log(temp);
