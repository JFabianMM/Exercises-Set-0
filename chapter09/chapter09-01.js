// **************************** //
// Exercise Chapter 09 - Exercise 01 
// **************************** //

// 1. Create a function that receives a parameter containing a string. The string data must be transformed 
//    into an object that can hold properties and methods. Note: Some changes may be required in the string data
//      Example:
//      var str = "{prop1: 42, myFn: function(a, b) { return a+b+this.prop1;}}"
//      var obj = dataParse(str);
//      Use of JSON parse, and function code evaluation


function dataParse(str){ 
        let str1=str;
        return eval?.("'use strict';(" + str1 + ")");    // OK the solution was ease, I did not see it before. 
}  
    
var str = '{"prop1": 42, "prop2": 50, "myFn": function(a, b) { return a+b+this.prop1;}}';
var str2 = '{"prop1":42, "prop2":64}';
var str3 = "{prop1: 42, myFn: function(a, b) { return a+b+this.prop1;}}"
var str4 = '{"a": "function"}'

var data = dataParse(str);  
console.log(data);
//console.log(data.myFn(8,8))     // Only to evaluate  str and str3    
