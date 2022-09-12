
// **************************** //
// Exercise Chapter 04 - Exercise 04 
// **************************** //

// 4. Write a function that will accept any number of arguments and print out their data type.
//    Example:
//    dataType (1, 6.2831, “pi*2”, [function(){}, 1], {}, function () {});
//    // number, float, string, array, object, function
//    Variable argument functions & data types
//    Estimated Time: 2 hr.

 function dataType() {    
        var result=[];
   for (let i = 0; i < arguments.length; i++) {
         if (typeof (arguments[i])=='number'){
              let a = arguments[i];
              if (a%1>0 || a%1<0 ){
                result.push('float');         
              }else{
                result.push( typeof (arguments[i]))
              }
          }else{                
                if (Array.isArray(arguments[i])){
                    result.push('array')
                } else{
                    result.push(typeof (arguments[i]))
                }
          }
   }
   return result
}

var a= dataType(1, 6.2831, 'pi*2', [function(){}, 1], {}, function () {});
console.log(a)

