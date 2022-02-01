var str = "abadcce".split("");
var n = str.length;

var obj = {};
for (i = 0; i < n; i++) {
  if (obj[str[i]] == undefined) {
    obj[str[i]] = 1;
  } else {
    obj[str[i]] = obj[str[i]] + 1;
  }
}

var res = "";

for (key in obj) {
  res += key + " ";
}
console.log(res);
