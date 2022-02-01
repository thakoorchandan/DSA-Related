var arr = [7, 3, 5, 4, 5, 3, 4];

var obj = {};
for (i = 0; i < arr.length; i++) {
  if (!obj[arr[i]]) {
    obj[arr[i]] = 1;
  } else {
    obj[arr[i]] = obj[arr[i]] + 1;
  }
}

for (key in obj) {
  if (obj[key] == 1) {
    console.log(key);
  }
}
