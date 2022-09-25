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

function distance (){
    let x1, y1, x2, y2, z1, z2, x, y, z, xx, yy, zz, tot;
    if(arguments.length < 4 || arguments.length == 5 || arguments.length > 6) throw new Error("Insufficient parameters");
    if (arguments.length==4){
        z1=0;
        z2=0;
    }
    if (arguments.length==6){
        z1=arguments[4];
        z2=arguments[5];
    }
    x1=arguments[0];
    y1=arguments[1];
    x2=arguments[2];
    y2=arguments[3];
    x = x2 - x1;
    y = y2 - y1;
    z = z2 - z1;
    xx = x * x;
    yy = y * y;
    zz = z * z;
    tot = xx + yy + zz;
    tot = Math.pow(tot, 0.5);
    return tot
}
let dist = distance (1, 2, 2, 2, 1, 4);
console.log(dist)


