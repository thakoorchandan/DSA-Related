var str = "masai".split("");

function palindrome(arr) {
  var left = 0;
  var right = str.length - 1;
  while (left < right) {
    if (arr[left] != arr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(palindrome(str));

// // call( ) invokes a function with a given 'this' value

// // apply( ) Invokes the function and allows you to pass in argument

// // bind( ) returns a new function allows to pass arguments
