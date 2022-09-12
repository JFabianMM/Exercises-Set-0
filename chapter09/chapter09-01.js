// **************************** //
// Exercise Chapter 09 - Exercise 01 
// **************************** //

// 1. Create a function that receives a parameter containing a string. The string data must be transformed 
//    into an object that can hold properties and methods. Note: Some changes may be required in the string data
//      Example:
//      var str = “{prop1: 42, myFn: function(a, b) { return a+b+this.prop1;}}”
//      var obj = dataParse(str);
//      Use of JSON parse, and function code evaluation


function dataValidate(str){      // The main function
  var str = str;              
  let str1 = str.split(',');  // Separates the string in an array to facilitate the analisis of the string
  size1 = str1.length;        // The size of the new array
  for (let i=0; i<str1.length; i++){    // I analize each element of the string
       let str2= str1[i];      
       let size2=str2.length;   // The size of the i element 
      var ban=0;                // I utilize some flags,  this is to identify if the the first element is "{".
      if (i==0){  // Para el primer elemento del array
           let ban=0;           // More flags to identify diferent peculiarities of the elements 
           let ban2=0;          // More flags to identify diferent peculiarities of the elements
           str2 = Array.from(str2, (val, index) => {      // Convert each element in an array to analyze them 
                            if (index==0 && val=='{'){   // The first element of the string is "{"
                              ban=1;                     // The flag changes
                              }       
                            if (index==1 && ban==1 && val == '"'){return val}   // identify double quotes in the properties
                            if (index==1 && ban==1 && val != '"'){              // if it doest have double quotes are inserted
                                   ban2=1;                                      // The flag changes
                                   return '"'+val}
                            if (ban2==1 && val == ":"){return '"'+ val}         // insert the second double quotes
                            return val;
           });         
      str2=str2.join('');    // Return to a string
      str1[i]=str2
      }
      if (i>0){  // For the remain elements of the array  
        ban=0; 
        ban2=0;
        let ban3=0;     // More flags to identify diferent peculiarities of the elements 
        let ban4=0;     // More flags to identify diferent peculiarities of the elements
        let ban5=0;     // More flags to identify diferent peculiarities of the elements
        let ban6=0;     // More flags to identify diferent peculiarities of the elements
        let ban7=0;     // More flags to identify diferent peculiarities of the elements
        let ban8=0;     // More flags to identify diferent peculiarities of the elements
        let ban9=0;     // More flags to identify diferent peculiarities of the elements
    
        ban4 = /function/.test(str1[i]);       // identify if the element contains a function
        if (ban4==false){
            let ban10=0;           // More flags to identify diferent peculiarities of the elements 
            let ban11=0;          // More flags to identify diferent peculiarities of the elements
            str2 = Array.from(str2, (val, index) => {      // Convert each element in an array to analyze them 
                             if (index==0 && val==' '){   // identify an space
                               ban10=1;                     // The flag changes
                               }       
                             if (index==1 && ban10==1 && val == '"'){return val}   // identify double quotes in the properties
                             if (index==1 && ban10==1 && val != '"'){              // if it doest have double quotes are inserted
                                    ban11=1;                                      // The flag changes
                                    return '"'+val}
                             if (ban11==1 && val == ":"){return '"'+ val}         // insert the second double quotes
                             return val;
            });
        }
        ban5 = /:/.test(str1[i]);              // identify if the element contains ":"   
        str2 = Array.from(str2, (val, index) => {            // Convert each element in an array to analyze them           
                         if (index==0 && val==' '){          // identify an space 
                            ban=1;}                          // A flag changes 
                          if (index==0 && val=='"'){         // identify a "
                              ban2=1;}                       // A flag changes
                          if (index==1 && ban==1 && val == '"'){return val}
                          if (index==1 && ban==1 && ban4==true && val != '"'){
                                 ban3=1;                     // A flag changes
                                 return '"'+val}
                          if (ban3==1 && val == ":"){
                              ban6=1;                        // A flag changes
                              return '"'+ val}
          
                         if (index>1 && ban4==true && ban6==1 && val == '"'){
                             ban7=1;                         // A flag changes
                             return val;}
                          if (index>1 && ban==1 && ban4==true && ban6==1 && ban7==0 && val == 'f'){
                              ban8=1;                        // A flag changes
                              return '"'+val}
                          if (index==size2 && ban4==true && ban8==1 && val == '}'){
                                ban8=1;                      // A flag changes
                                return val+'"'}
                         if (index==size2-1 && ban4==false && ban5==false && ban9==0 && val == '}'){
                              return '"'+val}
                         if (index==size2-2 && ban4==false && ban5==false && val == '"'){
                                ban9=1;                      // A flag changes
                              return val}
                          return val;
          });   
        str2=str2.join('');      // Return to a string
        str1[i]=str2;
      }   
  }
  str1=str1.join();              // Return to a string
  try {
     str1=JSON.parse(str1);
     return str1;
  }
  catch(err) {
     let str1="Its NOT a JSON Data";
     return str1; 
} 
}


var str = '{prop1: 42, prop2: 50, myFn: function(a, b) { return a+b+this.prop1;}}';
var str2 = '{prop1:42, prop2:64, f:[]}';
var data = dataValidate(str);  // The function correct some errors and validate JSON data
console.log(data) 
var data2 = dataValidate(str2); 
console.log(data2)






 

// FALTA trow an error 

//var str2=dataParse(str);
//let str3=JSON.parse(str);
//console.log(dataParse(str))    // The function iserts double quotes in properties if they dont have them.
                               // The function iserts double quotes for functions in order to convert them to strings.
                               // Converts the strings in an object.
//console.log(eval(str))


