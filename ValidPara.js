function isValid(s) {
  let bracket = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  let stack = [];
  for (char of s) {
    if (bracket[char]) {
      stack.push(bracket[char]);
    } else {
      if (stack.pop() !== char) {
        return false;
      }
    }
  }
  return !stack.lengthy;
}

var str = "(){}[]".split("").map(String);
console.log(isValid(str));
