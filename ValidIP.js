var ip = "255.255.255.255";

var arr = ip.split(".");
var n = arr.length;
var flag = false;
for (i = 0; i < n; i++) {
  if (arr[i] > 0 && arr[i] <= 255) {
    flag = true;
  }
  if (arr[i].length !== 3) {
    flag = false;
    break;
  }
  if (arr[i] === "") {
    flag = false;
    break;
  }
}

if (flag) {
  console.log("Valid IP");
} else {
  console.log("Not Valid Ip");
}
