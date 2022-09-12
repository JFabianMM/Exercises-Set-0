// **************************** //
// Exercise Chapter 04 - Exercise 03 
// **************************** //

// 3. Create a custom object type that will hold a number value.
//    a. Make sure that no other data type can be assigned to that variable.
//    b. It must hold ONLY numbers.
// Hint: Validation, setters & getters, private variables
// Estimated Time: 2 hr <.
  
var customObject = (function () {
  var number = 0;                          // Start with number=0;
  var getNumber = function () {
      return number 
  };
  var setNumber = function (num) {
    if (typeof(num) == 'number') {
      number=num;
    }
  };
  return {
    getNumber,
    setNumber 
  };
  })();

console.log(customObject.number);          // Its not allowed (undefined)
console.log(customObject.getNumber());     // Get de private value
customObject.setNumber(9);                 // Set the value
console.log(customObject.getNumber());     // We can see the new value
  
