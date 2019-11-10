function lengths(arr) { // ["do", "re", "mi"]
for (var idx = arr.length - 1; idx > 0; idx--) {
 arr[idx] = arr[idx - 1].length;
 }
return arr;
}
