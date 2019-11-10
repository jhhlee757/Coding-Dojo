function swap(arr) {
for (var i = 0; i < arr.length; i++) {
  var temp = arr[i];
  arr[i] = arr[arr.length - 1];
  arr[arr.length - 1] = temp;
  }
  return arr;;
 }
