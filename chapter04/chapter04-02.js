// **************************** //
// Exercise Chapter 04 - Exercise 02 
// **************************** //

// 2. Create a function that will recursively go through all of the elements of an array of numbers and add them.
//    Example:
//    var arr = [ 1, 3, 5, 7];
//    var sum = addRec (arr); // 16
//    Use of recursion.
// Estimated Time: 2 hr.

function addRec(arr) {
          if (arr.length < 1) {
             return 0;
          } 
          return arr[arr.length-1] + addRec(arr.slice(0,arr.length-1))
    }

var arr = [1, 2, 3, 4, 5, 23, 10, 10];
console.log(addRec(arr))



