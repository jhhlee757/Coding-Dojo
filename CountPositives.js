function count(arr) {
var sum = 0;
for (var i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    sum++;
   }
  }
  arr[arr.length - 1] = sum;
  return arr;
 }
