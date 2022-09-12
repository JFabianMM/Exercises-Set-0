// **************************** //
// Exercise Chapter 04 - Exercise 03 
// **************************** //

// 3. Create a custom object type that will hold a number value.
//    a. Make sure that no other data type can be assigned to that variable.
//    b. It must hold ONLY numbers.
// Hint: Validation, setters & getters, private variables
// Estimated Time: 2 hr <.

// 4.3) Object with a number value property
// - the “num” property is public and can be modified without going 
//   through the “val” setters and getters. This should not be allowed. 

let customObject = {
    get num() {
      return this._num;
    },  
    set num(value) {
      if (typeof(value) == 'number') {
        this._num = value;
      }else{
        console.log('It is not a number');
        return;
      }     
    }
  };
  
  customObject.num = 9;
  console.log(customObject.num); 

