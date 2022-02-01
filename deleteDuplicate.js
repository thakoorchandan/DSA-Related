function removeDuplicates(arr) {
  var n = arr.length;
  var res = "";
  var obj = {};
  for (let i = 0; i < n; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]] += 1;
    }
  }
  for (k in obj) {
    if (obj[k] == 1) {
      res += k;
    }
  }
  return res;
}

console.log(removeDuplicates("foobar"));
