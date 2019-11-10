function values(arr){
  var count = 0;
  for (var i = 0, i < arr.length; i++){
    if (arr[i] > arr[1]){
    console.log(arr[i]);
    count++
  }
}
return count;
}
var num = [1, 3, 5, 7, 9, 13]
console.log(values(num));
