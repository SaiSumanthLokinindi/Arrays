const a = [1, 5, 15, 10];

const minDiff = (arr, k) => {
  arr = arr.sort((a, b) => a - b);
  console.log(arr);
  let min = arr[0],
    n = arr.length;
  let max = arr[n - 1];
  let res = max - min;

  for (let i = 1; i < n; i++) {
    max = Math.max(arr[n - 1] - k, arr[i - 1] + k);
    min = Math.min(arr[0] + k, arr[i] - k);
    res = Math.min(res, max - min);
  }
  return res;
};

console.log(minDiff(a, 3));
