function value(arr) {
if (arr.length = 1){
  break;
  }
  else {
  var newarr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > arr[1]) {
    newarr.push(arr[i]);
    }
  }
  return newarr;
 }
}
console.log(value(x));
