function reverse(arr) {
var temp = arr[i];
for (var i = 0, i < arr.length; i++) {
arr[i] = arr[arr.length - 1]
arr[arr.length - 1] = temp;
}
return arr;
}
