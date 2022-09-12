// **************************** //
// Exercise Chapter 04 - 01 
// **************************** //

// 1. Create a recursive function that will calculate the fibonacci value of a number.
//    Example:
//    var n = fibonacci (4); // 3
//    var m = fibonacci (9); // 34
// Use of recursion.
// Estimated Time: 1 hr <.

// function fibonacci(num) {
//        if(num < 2) {
//            return num;
//        }
//        else {
//            return fibonacci(num-1) + fibonacci(num - 2);
//        }
//    }   
// console.log(fibonacci(7));

// **************************** //
// Exercise Chapter 04 - 02 
// **************************** //

// 2. Create a function that will recursively go through all of the elements of an array of numbers and add them.
//    Example:
//    var arr = [ 1, 3, 5, 7];
//    var sum = addRec (arr); // 16
//    Use of recursion.
// Estimated Time: 2 hr.

// function addRec(num) {
//           var sum=0;
//           if (num.length < 1) {
//              return sum;
//           }
//           a=num[num.length-1];
//           num.pop()
//           return a + addRec(num)
//     }

// var arr = [1, 2, 3, 4, 5,22];
// console.log(addRec(arr))

// **************************** //
// Exercise Chapter 04 - 03 
// **************************** //

// 3. Create a custom object type that will hold a number value.
//    a. Make sure that no other data type can be assigned to that variable.
//    b. It must hold ONLY numbers.
// Hint: Validation, setters & getters, private variables
// Estimated Time: 2 hr <.

// let customObject = {
//        num: 0, 
//        get val() {
//          return this.num;
//        },
//        set val(value) {
//               if (typeof (value) == 'number'){
//                      this.num = value;  
//             }    
//        }
// } 
// customObject.val = 11;           // set val is executed with the given value.
// console.log(customObject.val)

// **************************** //
// Exercise Chapter 04 - 04 
// **************************** //

// 4. Write a function that will accept any number of arguments and print out their data type.
//    Example:
//    dataType (1, 6.2831, “pi*2”, [function(){}, 1], {}, function () {});
//    // number, float, string, array, object, function
//    Variable argument functions & data types
//    Estimated Time: 2 hr.

//  function dataType() {    
//         var result=[];
//    for (let i = 0; i < arguments.length; i++) {
//      result.push( typeof (arguments[i]))
//    }
//    return result
// }

// var a= dataType(1, 6.2831, 'pi*2', [function(){}, 1], {}, function () {});
// console.log(a)

// **************************** //
// Exercise Chapter 04 - 05 
// **************************** //

// 5. Write a function that will calculate the distance between two points. 
//    The function should be able to handle 2D and 3D points.
// Example:
// var x1 = 1, y1 = 2, z1 = 1;
// var x2 = 2, y2 = 2, z2 = 4;
// var delta1 = distance (x1, y1, x2, y2); // delta = 1
// var delta2 = distance (x1, y1, z1, x2, y2, z2); // delta = 3.1622...
// distance (x1, x2); // should throw an error: Insufficient parameters
// Function overloading and validation
// Estimated Time: 4 hr.

// function distance (x1, y1, x2, y2, z1=0, z2=0){      
//        if  (arguments.length < 4){
//               console.log('Error: Insufficient parameters')
//        }
//        else{
//               var x = x2 - x1;
//               var y = y2 - y1;
//               var z = z2 - z1;
//               var xx = x * x;
//               var yy = y * y;
//               var zz = z * z;
//               var tot = xx + yy + zz;
//               tot = Math.pow(tot, 0.5);
//               return tot
//        }      
// }
// var delta1 = distance (1, 2, 2, 2, 1, 4);
// console.log(delta1)


// **************************** //
// Exercise Chapter 04 - 06 
// **************************** //

// 6. Make the function from exercise 5 accept its parameters as either a parameter 
//    list or as two arrays containing 2D or 3D point data.
// Example:
// distance (1, 2, 2, 2); // returns 1 (done as part of exercise 5)
// distance ([1,2], [2,2]); // returns 1
// distance ([1,2], [2,2,4]); // error: incompatible point data
// Function overloading and validation
// Estimated Time: 4 hr.


//  function distance (x1, y1, z1=0, x2, y2, z2=0){
//        if (typeof (arguments[0]) == 'number'){
//               if  (arguments.length < 4){
//                      console.log('Error: Insufficient parameters')
//               }
//               else{
//                      var x = x2 - x1;
//                      var y = y2 - y1;
//                      var z = z2 - z1;
//               } 
//        }
//        if (typeof (arguments[0]) == 'object' && typeof(arguments[1]) == 'object' ){
//           if  (arguments[0].length < 2 || arguments[1].length < 2 ){
//               console.log('Error: Insufficient parameters')
//            }
//            if  ((arguments[0].length == 2 && arguments[1].length > 2) || (arguments[1].length == 2 && arguments[0].length > 2) ){
//               console.log('Error: incompatible point data')
//            }
//            if  (arguments[0].length >= 3 && arguments[1].length >= 3){
//               var x1 = arguments[0][0];
//               var y1 = arguments[0][1];
//               var z1 = arguments[0][2];
//               var x2 = arguments[1][0];
//               var y2 = arguments[1][1];
//               var z2 = arguments[1][2];
//               var x = x2 - x1;
//               var y = y2 - y1;
//               var z = z2 - z1;
//            }
//            if  (arguments[0].length == 2 && arguments[1].length == 2){
//               arguments[0].push(0);
//               arguments[1].push(0);
//               var x1 = arguments[0][0];
//               var y1 = arguments[0][1];
//               var z1 = arguments[0][2];
//               var x2 = arguments[1][0];
//               var y2 = arguments[1][1];
//               var z2 = arguments[1][2];
//               var x = x2 - x1;
//               var y = y2 - y1;
//               var z = z2 - z1;
//            }
//        } 
//        var xx = x * x;
//        var yy = y * y;
//        var zz = z * z;
//        var tot = xx + yy + zz;
//        tot = Math.pow(tot, 0.5);
//        return tot   
// }

// var delta1 = distance ([1, 2, 1, 2 ], [2, 2, 4, 4]);
// console.log(delta1)
