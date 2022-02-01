var s1 = "ABCDE".split("");
var s2 = "DCBAE".split("");

function anagram(s1, s2) {
  if (s1.length !== s2.length) {
    return "No";
  } else {
    var c2 = 0;
    var c1 = 0;
    for (i = 0; i < s1.length; i++) {
      c1 += s1[i].charCodeAt(0);
      c2 += s2[i].charCodeAt(0);
    }
  }
  if (c1 == c2) {
    return "Yes they are anagrams";
  } else {
    return "No they are not anagrams";
  }
}

console.log(anagram(s1, s2));
