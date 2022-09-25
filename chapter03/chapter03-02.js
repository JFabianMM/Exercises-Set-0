
// **************************** //
// Exercise Chapter 03 - Exercise 02 
// **************************** //
// 2. Create a function that will return the addition of N numbers.
//    Example:
//    var answer = add (1, 2) + add ( 1, 4, 6, 7, 2);
//    Dynamic argument list handling with JS
// Estimated Time: 10 min<.

function add() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
console.log(add(1,2,6));

