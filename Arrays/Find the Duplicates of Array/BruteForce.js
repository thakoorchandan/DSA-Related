var arr = [1, 2, 3, 6, 3, 6, 1];

const findDuplicates = (nums) => {
  nums.sort(function (a, b) {
    return a - b;
  }); // alters original array
  let ans = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      if (ans[ans.length - 1] !== nums[i]) {
        ans.push(nums[i]);
      }
    }
  }
  return ans;
};
console.log(findDuplicates(arr));
