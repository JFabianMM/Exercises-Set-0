// **************************** //
// Exercise Chapter 03 - Exercise 03
// **************************** //
// 3. Create an object that will hold methods for adding, multiplying, and factorial operations.
//    Example:
//    var a = myMath.add (1, 2, 3); //6 var b = myMath.mul (1, 2, 3); // 6 var c = myMath.fact ( 3); // 6
//    Use of anonymous functions and functions as object properties (methods.)
// Estimated Time: 15 min<.

let myMath = {
  add: function () {
       let sum = 0;
        for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
        }
       return sum;
       },
  mul: function () {
       let res = 1;
         for (let i = 0; i < arguments.length; i++) {
         res *= arguments[i];
         }
        return res;
       },
  fact: function (x) {
        let count = x; 
        let res = 1;
          while (count > 0) {
           res = res * count;
           count = count -1;
          }
        return res;
        }
}

let a = myMath.add (1, 2, 3); 
console.log(a)
let b = myMath.mul (1, 2, 4); 
console.log(b)
let c = myMath.fact (7); 
console.log(c)


