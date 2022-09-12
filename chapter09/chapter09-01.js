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
        let position;                    
        let ban=0;                      // I utilize this variable as a flag
        let str2=[];                  
        let str1 = str.split(',');
        try{
          for (let i=0; i<str1.length; i++){
            if (/function/.test(str1[i])){    // Detect if an element is a function 
              ban=1;
              position=i;
            }
          }
          if (ban==1){                    // Flag there is a function
            str1.length = position;       // set length to remove function parts 
            str2.push(str1[position-1]);  // To add the character "}" at the end
            str2.push("}")                // To add the character "}" at the end
            str2=str2.join('');           // To add the character "}" at the end
            str1.length = position-1;
            str1.push(str2);              // To add the character "}" at the end
            str1=str1.join();             // To add the character "}" at the end
            str1=JSON.parse(str1);        // We convert the string in an object
            let str3 = str.replace(/[:]+/g, '=');  // It is modified the string to be evaluated by eval(...) 
            let str4 = str3.replace(/['"]+/g, ''); // It is modified the string to be evaluated by eval(...)
            var functionObj ={fn:eval(str4)}     // The string is evaluated and we get the object  
            let newObj = Object.assign(str1, functionObj)
            return newObj
          }else{
            newObj=JSON.parse(str);
            return newObj
          }
        }catch(e){
          return ('Error: The string has not JSON format')
        }        
}  
    
var str = '{"prop1": 42, "prop2": 50, "myFn": function(a, b) { return a+b+this.prop1;}}';
var str2 = '{"prop1":42, "prop2":64}';
var str3 = "{prop1: 42, myFn: function(a, b) { return a+b+this.prop1;}}"
// I selected these 3 string examples. The first two strings are OK. The third do not have the right JSON format  

var data = dataParse(str);  
console.log(data)               // I show the object
console.log(data.fn(8,8))       // The function can be executed
