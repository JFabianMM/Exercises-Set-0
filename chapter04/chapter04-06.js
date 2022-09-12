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
     try{
        if (typeof (arguments[0]) == 'number'){
            if(arguments.length != 4){
                throw "insufficient parameters";
            }
            else{
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
            } 
     }
     if (typeof (arguments[0]) == 'object' && typeof(arguments[1]) == 'object' ){
        if ((arguments[0].length == 2 || arguments[0].length == 3) && arguments[0].length == arguments[1].length){
             if  (arguments[0].length == 2){
                arguments[0].push(0);
                arguments[1].push(0);
             }  
             var x1 = arguments[0][0];
             var y1 = arguments[0][1];
             var z1 = arguments[0][2];
             var x2 = arguments[1][0];
             var y2 = arguments[1][1];
             var z2 = arguments[1][2];
         }else{
            throw "insufficient parameters";
         }
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
        console.error("Input has " + err);
     }
}

//var delta1 = distance (1, 2, 2, 2);
var delta1 = distance ([1, 2, 1], [2, 2, 4]);
console.log(delta1)

