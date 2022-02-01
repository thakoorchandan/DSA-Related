var s1 = "ABCDE"
  .split("")
  .map((e) => e.charCodeAt(0))
  .reduce((a, b) => a + b);
var s2 = "DCBAE"
  .split("")
  .map((e) => e.charCodeAt(0))
  .reduce((a, b) => a + b);

if (s1 == s2) {
  console.log("Yes they are anagrams");
} else {
  console.log("No they are not anagrams");
}
