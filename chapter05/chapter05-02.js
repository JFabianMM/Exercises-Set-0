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

let building = (function () { 
   let equipment_users = {};   // I utilize an object to store the items as a property-value pair 
   let searches = new Map();

   return {  
      addItem: function (item, floor) {
         const keyword = `${item}`; // This is the keyword of the item.
               if(arguments.length>2) throw "Too many arguments";      
               if(arguments.length<2) throw "Too few arguments";      
               if (!equipment_users.hasOwnProperty(keyword)){ 
                  equipment_users[keyword] = floor;          // Store the new property an value
               }
               return equipment_users[keyword];
      },
      consultItem: function (item) {
         const keyword = `${item}`; // This is the keyword of the item. 
               if(arguments.length>1) throw "Too many arguments";      
               if(arguments.length<1) throw "Too few arguments";      
               if (searches.has(item)){
                  return searches.get(item);           // INFORMATION OBTAINED FROM HASHMAP
               }else{
                  if (!equipment_users.hasOwnProperty(keyword)) throw "Item do not exist";  
                  searches.set(keyword, equipment_users[keyword]);  // Feeding the hashmap
                  return equipment_users[keyword]; 
               }
      }  
   }; 
})();

let building1 =building;
console.log(building1.addItem('computer1','floor1'));
console.log(building1.consultItem('computer1'));
console.log(building1.consultItem('computer1'));
console.log(building1.addItem('Antony','floor2'));
console.log(building1.consultItem('Antony'));
console.log(building1.consultItem('Antony'));  


