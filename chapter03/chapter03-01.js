// **************************** //
// Exercise Chapter 03 - Exercise 01 
// **************************** //

// 1. Create a function that will multiply two numbers. The function must return the result in base 13.
//    Example:
//    var answer = mul (9, 6); // 42
//    Basic function creation together with built-in JS Math functionality. 

var mul = function (x, y){
  var base = 13;
  var res = x * y;
  var digit;
  var num = res;
  const result = [];
   while (res > 0) {
       num = res;
       res = Math.floor(res / base);
       digit = num % base;
       if (digit>9){
        if (digit==10){digit='A'}
        if (digit==11){digit='B'}
        if (digit==12){digit='C'}
            result.push(digit); 
       }else{
        result.push(digit);
       }    
  }
  let result2 = result.reverse();
  let result3 = result2.join('');
  return result3;
}

console.log(mul(2, 20)) 
