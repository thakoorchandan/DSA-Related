var str = "masai school".split("");

function rev(str) {
  var n = str.length;
  var i = 0;
  var j = n - 1;
  while (i < j) {
    var temp = str[i];
    str[i] = str[j];
    str[j] = temp;
    i++;
    j--;
  }
  return str;
}

console.log(rev(str).join(""));
