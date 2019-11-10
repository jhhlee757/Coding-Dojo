function biggiesize(arr) {
var count = 0
for (var i = 0, i < arr.length; i++){
  if (arr[i] > 0){
  arr[i] = "big";
  }
 }
 return arr;
}
