// **************************** //
// Exercise Chapter 03 - Exercise 05
// **************************** //

// 5. Create a function that will print out the properties of an object.
// a. If one parameter is provided, it should print out all of the properties accessible by that object.
// b. If a second boolean value parameter is provided, it should only print out the
//    values that belong to the object instance itself if true.

// 3.5) Object properties
// - You were only expected to output the object’s keys.
// - “constructor” was not one of the expected properties.


 function CustomObject (a, b) {       // Custom Object 
     this.a = a;                      // Property a
     this.b = b;                      // Property b
 }
 CustomObject.prototype.c = 40;
 CustomObject.prototype.d = 50;

function printObjProp(obj, onlyInstance=false){       // This is the function
       if (onlyInstance === false){
            Object.getOwnPropertyNames(obj).forEach(function(val) {
            console.log(val + " -> " + obj[val]);
          });
            Object.getOwnPropertyNames(Object.getPrototypeOf(obj)).forEach(function(val) {
            if (val!='constructor'){
              console.log(val + " -> " + obj[val]);
            }              
          });
       }else{
        Object.getOwnPropertyNames(obj).forEach(function(val) {
            console.log(val + " -> " + obj[val]);
          }); 
    }
}

var object1 = new CustomObject(20, 30);
//printObjProp(object1,false)
//printObjProp(object1,true)
printObjProp(object1)

// I print the (val + " -> " + obj[val]) for presentation pursposes. Of course the object keys are only obj[val]. 