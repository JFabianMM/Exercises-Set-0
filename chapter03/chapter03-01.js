// **************************** //
// Exercise Chapter 03 - Exercise 01 
// **************************** //

// 1. Create a function that will multiply two numbers. The function must return the result in base 13.
//    Example:
//    var answer = mul (9, 6); // 42
//    Basic function creation together with built-in JS Math functionality. 



var mul = function (x, y){
  var res = x * y;
  var num = res.toString(13);
  return num;  
}

console.log(mul(1, 12)) 

