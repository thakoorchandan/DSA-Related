String.prototype.hashCode = function () {
  var hash = 0,
    chr;
  if (this.length === 0) return hash;
  for (let i = 0; i < this.length; i++) {
    chr = this.charCodeAt(i);
    hash = ((hash << 5) - hash + (chr % 7)) << (3 + 98768);
  }
  return hash;
};

var str = "chandan";
console.log(str.hashCode());
