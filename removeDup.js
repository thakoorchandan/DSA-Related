var str = "acaaabbbacdddd";
var arr = str.split("").map(String);
var n = arr.length;
var res = "";
let i = 0;

while (arr[i]) {
  if (arr[i] !== arr[i + 1]) {
    res += arr[i];
    i++;
  }

  if (arr[i + 1] && arr[i] == arr[i + 1]) {
    while (arr[i + 1] && arr[i] == arr[i + 1]) {
      i++;
    }
    i++;
  }
}

console.log(res);
