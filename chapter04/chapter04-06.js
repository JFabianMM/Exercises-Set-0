// **************************** //
// Exercise Chapter 04 - Exercise 06 
// **************************** //

// 6. Make the function from exercise 5 accept its parameters as either a parameter 
//    list or as two arrays containing 2D or 3D point data.
// Example:
// distance (1, 2, 2, 2); // returns 1 (done as part of exercise 5)
// distance ([1,2], [2,2]); // returns 1
// distance ([1,2], [2,2,4]); // error: incompatible point data
// Function overloading and validation
// Estimated Time: 4 hr.

 function distance (){
      let x1, y1, x2, y2, z1, z2, x, y, z, xx, yy, zz, tot;
      if (typeof (arguments[0]) == 'number'){
            if(arguments.length != 4) throw new Error("Insufficient parameters");   
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
     }
     if (typeof (arguments[0]) == 'object' && typeof(arguments[1]) == 'object' ){
        if ((arguments[0].length == 2 || arguments[0].length == 3) && arguments[0].length == arguments[1].length){
           if  (arguments[0].length == 2){
                arguments[0].push(0);
                arguments[1].push(0);
            }  
            x1 = arguments[0][0];
            y1 = arguments[0][1];
            z1 = arguments[0][2];
            x2 = arguments[1][0];
            y2 = arguments[1][1];
            z2 = arguments[1][2];
         }else{
            throw new Error("Insufficient parameters")  
         }
     } 
     x = x2 - x1;
     y = y2 - y1;
     z = z2 - z1;  
     xx = x * x;
     yy = y * y;
     zz = z * z;
     tot = xx + yy + zz;
     tot = Math.pow(tot, 0.5);
     return tot;        
   }


//let delta = distance (1, 2, 2, 2);
let delta = distance ([1, 2, 1], [2, 2, 4]);
console.log(delta)

