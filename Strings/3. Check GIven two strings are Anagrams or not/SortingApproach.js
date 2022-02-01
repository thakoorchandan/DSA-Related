var s1 = "ABCDE".split("");
var s2 = "DCBAE".split("");

function anagram(s1, s2) {
  if (s1.length !== s2.length) {
    console.log("No");
  } else {
    var arr1 = s1.sort();
    var arr2 = s2.sort();
    for (i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return "Not an Anagram";
      }
    }
    return "Yes it is an Anagram";
  }
}

console.log(anagram(s1, s2));
