// **************************** //
// Exercise Chapter 03 - Exercise 01 
// **************************** //

// 1. Create a function that will multiply two numbers. The function must return the result in base 13.
//    Example:
//    var answer = mul (9, 6); // 42
//    Basic function creation together with built-in JS Math functionality. 
//    Estimated Time: 1 hours.

// var mul = function (x, y){
//   var base = 13;
//   var res = x * y;
//   var digit;
//   var num = res;
//   const result = [];
//    while (res > 0) {
//        num = res;
//        res = Math.floor(res / base);
//        digit = num % base;
//        console.log(digit);
//        result.push(digit);
//   }
//   const result2 = result.reverse();
//   return result2;
// }

// console.log(mul(9, 6)) 


// **************************** //
// Exercise Chapter 03 - Exercise 02 
// **************************** //
// 2. Create a function that will return the addition of N numbers.
//    Example:
//    var answer = add (1, 2) + add ( 1, 4, 6, 7, 2);
//    Dynamic argument list handling with JS
// Estimated Time: 10 min<.

// function add() {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum;
// }
// console.log(add(1,2,6));


// **************************** //
// Exercise Chapter 03 - Exercise 03
// **************************** //
// 3. Create an object that will hold methods for adding, multiplying, and factorial operations.
//    Example:
//    var a = myMath.add (1, 2, 3); //6 var b = myMath.mul (1, 2, 3); // 6 var c = myMath.fact ( 3); // 6
//    Use of anonymous functions and functions as object properties (methods.)
// Estimated Time: 15 min<.

// var myMath = {
//   add: function () {
//        let sum = 0;
//         for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//         }
//        return sum;
//        },
//   mul: function () {
//        let res = 1;
//          for (let i = 0; i < arguments.length; i++) {
//          res *= arguments[i];
//          }
//         return res;
//        },
//   fact: function (x) {
//         let count = x; 
//         let res = 1;
//           while (count > 0) {
//            res = res * count;
//            count = count -1;
//           }
//         return res;
//         }
// }

// var a = myMath.add (1, 2, 3); 
// console.log(a)
// var a = myMath.mul (1, 2, 4); 
// console.log(a)
// var a = myMath.fact (7); 
// console.log(a)


// **************************** //
// Exercise Chapter 03 - Exercise 04
// **************************** //

// 4. Create a custom object that will hold an image’s mock information such as pixel color data, image size, and name. 
//    It must be able to return the information.
//    Example:
//    var data = new Array (1600); // 40 x 40 px dummy image data var img = new Image (data, 40, 40, ‘myImage’);
//    img.width; // 40
//    img.height; // 40
//    img.name; // ‘myImage’
//    img.pixelData (20, 4); // returns the color of the pixel at that position.
// Estimated Time: 1 hour.

// // first I create a  40 x 40 px array with dummy image data (data) 
// var data = new Array (40);
// for (var i=0; i<40; i++){
//   data[i] = new Array (40);
// }
// for (var i=0; i<40; i++){
//   for (var ii=0; ii<40; ii++){
//       data[i][ii] = Math.random() * 10;
//   }
// }

// // I create the object  
// function image (data, x, y, name) {
//       this.width = y;
//       this.height = x;
//       this.name = name; 
// } 
// // I added the method to obtain the information of a given pixel
// image.prototype.pixelData = function (x, y){
//         result= data[x][y];
//         return result;
// }

// console.log(data)
// var img = new image (data, 40, 40, 'myImage');
// console.log(img.width) // 40
// console.log(img.height) // 40
// console.log(img.name) // ‘myImage’
// console.log(img.pixelData(22, 4))


// **************************** //
// Exercise Chapter 03 - Exercise 05
// **************************** //

// 5. Create a function that will print out the properties of an object.
// a. If one parameter is provided, it should print out all of the properties accessible by that object.
// b. If a second boolean value parameter is provided, it should only print out the
//    values that belong to the object instance itself if true.


//  function CustomObject (a, b) { 
//      this.a = a; 
//      this.b = b; 
//  }

//  CustomObject.prototype.c = function adding () { 
//           return this.a + this.b; 
//           };
//  CustomObject.prototype.d = function mul () { 
//           return this.a * this.b; 
//           }; 

// function printObjProp(obj, y=false){
//        console.log(y)
//        if (y === false){
//         console.log(Object.getOwnPropertyNames(obj))
//         console.log(Object.getPrototypeOf(obj))
//        }
//        if (y === true){
//         console.log(Object.getOwnPropertyNames(obj))
//        }
// }
// var object1 = new CustomObject(20, 30);
// printObjProp(object1)

