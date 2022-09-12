// **************************** //
// Exercise Chapter 04 - Exercise 05 
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

// 4.5) Distance function
//      - A console.log statement in the catch block is not useful. 
//        The calling code of the function may need to know something went wrong. 


function distance (){
    try { 
        if(arguments.length < 4 || arguments.length == 5 || arguments.length > 6) throw null;
        if (arguments.length==4){
           var x1=arguments[0];
           var y1=arguments[1];
           var x2=arguments[2];
           var y2=arguments[3];
           var z1=0;
           var z2=0;
        }
        if (arguments.length==6){
            var x1=arguments[0];
            var y1=arguments[1];
            var x2=arguments[2];
            var y2=arguments[3];
            var z1=arguments[4];
            var z2=arguments[5];
         }
        var x = x2 - x1;
        var y = y2 - y1;
        var z = z2 - z1;
        var xx = x * x;
        var yy = y * y;
        var zz = z * z;
        var tot = xx + yy + zz;
        tot = Math.pow(tot, 0.5);
        return tot
      }catch(err) {
        return null    // Adgressing the feedback comment, I decided to return NULL when something is wrong
      }                // so the calling code can know something went wrong.
}
var dist1 = distance (1, 2, 2, 2, 1, 4);
console.log(dist1)


