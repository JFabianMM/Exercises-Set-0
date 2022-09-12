// **************************** //
// Exercise Chapter 05 - Exercise 02 
// **************************** //

// 2. Implement the following:
//      a. A large building has many people and pieces of equipment. A new tech-support
//          employee has been hired to help out solve users’ problems and fix broken equipment. 
//          The new employee is still unfamiliar with the layout but is doing his best to keep 
//          track of where everyone and everything is.
//          i. Implement a structure that represents the building.
//                  1. Must contain data types representing equipment and users.
//          ii. Equipment can be associated with rooms or specific people
//          iii. Each piece of equipment and person is associated with a specific floor and room.
//          iv. The new tech-support employee must be able to find users and
//              equipment as quickly as possible.
//          v. The new employee must remember past searches
//  Use of memoization and implementation of a simple searching algorithm.
//  Estimated Time: 4 hr.


 // I implemented a linear search (the easiest way). Is not very efficient, however
// due to the time, i didnt consider the implementation of another kind of 
// searching algoritm such as Binary Search or String Search.  
// If you thing is important, I can do it. 

function building() {
    let equipment_users = {};   // I utilize an object to store the items as a property-value pair 
    let searches = [];          // I utilize an array to store the searches
  
    return function equipmentAndUsers(a, b='empty') {
      const keyword = `${a}`; // This is the keyword of the item.
      
      if (arguments.length == 1){        // The user try to make a search (only 1 argument)
         let position = -1;              // It is a flag to indicate that the search has found the item in previous searches
         let index = 0;                  // Indicate the index of the array that contain the item. 
         while(index < searches.length) {           // I implemented a linear search (the easiest way).     
               if(searches[index][0] == keyword){
                 position = index;                  // The index is saved in the position variable
                 console.log("You have searched this argument before");   // Only to indicate a previous search has been made
                 return searches[index][1]          
                 } 
                index += 1;
             }
         if (position < 0){               // Position variable is a flag that indicates if the search has found the item
            if (equipment_users.hasOwnProperty(keyword)){   
                searches.push([keyword, equipment_users[keyword]]);   // Introduces a new search in the array
                return equipment_users[keyword];
             }
                else {
                    return null;
            }
         }
                
      }

      if (arguments.length > 1){                               // The user try to insert a new keyword (more than 1 argument)
            if (equipment_users.hasOwnProperty(keyword)) {     // This is the search for the keyword in the object properties
                console.log("Item Information Previously Stored (Registration Not allowed)");  // Indicate that the keyword is already stored
                return equipment_users[keyword];
             } else{                                           // The keyword is new (is not previously stored) 
                equipment_users[keyword] = b;                  // Store the new property an value
                return equipment_users[keyword];
             }       
        }
    };
  }
  
  const users_equipment = building();                           // Creates a new function for users and equipment
  
  users_equipment('computer1', 'floor1');  // This line registers a new equipment/item (computer1) and its location (floor1)
  users_equipment('computer2', 'floor1');  // This line registers a new equipment/item (computer2) and its location (floor1)
  users_equipment('fun1', 'floor2');       // This line registers a new equipment/item (fun1) and its location (floor2)
  users_equipment('fun2', 'floor2');       // This line registers a new equipment/item (fun2) and its location (floor2)
  users_equipment('Ernest', 'floor1');     // This line registers a new user (Ernest) and its location (floor1)
  users_equipment('Louis', 'floor2');      // This line registers a new user (Louis) and its location (floor2)
  users_equipment('Fabian', 'floor3');     // This line registers a new user (Fabian) and its location (floor3)
  users_equipment('Jonh', 'floor4');       // This line registers a new user (Jonh) and its location (floor4)
  console.log(users_equipment('Jonh'));              // This line consults the information of a user (Jonh)
  console.log(users_equipment('Fabian'));           // This line consults the information of a user (Fabian)
  console.log(users_equipment('Jonh'));             // This line consults the information of a user (Jonh) (from previous consults)
  console.log(users_equipment('Fabian'));   // This line return the consult of information of a user (Fabian) (from previous consults)
  console.log(users_equipment('Fabi'));             // This line returns NULL   
  users_equipment('Jonh', 'floor6');       // Try to register a previusly registered item (Not allowed)

// // * When the function user or equipment is used with 2 arguments, indicates that is for registering a new item/user 
//      (first argument is the item/user and the second argument is the description)

// // * When the function user or equipment is used with 1 arguments, indicates thet is a consult


