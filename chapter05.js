// **************************** //
// Exercise Chapter 05 - 01 
// **************************** //

// 1. Implement the following:
//     a. A bank that holds client’s information:
//         i. account number;
//         ii. balance
//     b. A set of clients where each can:
//         i. hold money of their own;
//         ii. deposit money into the bank (to any account);
//         iii. retrieve money from the bank (from personal account only);
//         iv. view current balance in bank (from personal account only)
//     c. A client cannot deposit more money than what it has;
//     d. A client cannot retrieve more money that what is in its account;
//     e. All financial information must be private.

//     Use of closures
//     Estimated Time: 4 hr.

// const client = (function() {
//      let balance = 0;
//      let personal_account_number=0;
//      let client_name;

//      return {
//          register: function (account_number, name){
//             personal_account_number=account_number;
//             client_name=name;
//             return{
//                 personal_account_number,
//                 client_name
//              }
//          },
//          deposit: function(value){
//              balance += value;
//              return balance;
//          },
//          retrieve: function(value){
//              if (balance - value < 0){
//                  console.log('Insufficient funds')
//                  return balance;
//              }
//              if (balance - value >= 0){
//                 balance -= value;
//                 return balance;
//              }
//          },
//          show: function(){
//              return{
//                 'Client Name': client_name,
//                 'Account Number': personal_account_number,
//                 'Balance': balance
//              }
//          }
//      }
//  })()
//
// console.log(client.show()); // 0                // This fucntion shows the information and balance of the cklient account
// client.register(986338, 'Fabian')              // This function register a new user, with an account number and name
// console.log(client.deposit(500)); // 500       // This function makes a deposit to the client
// console.log(client.retrieve(300)); // 300      // This function makes a retrieve
// console.log(client.show());                   // This fucntion shows the information and balance of the cklient account

// **************************** //
// Exercise Chapter 05 - 02 
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

// function building() {
//     let equipment_users = {};   // This object is used to save each items as a property-value pair 
//     let searches = [];          // This variable is used to save the searches
  
//     return function equipmentAndUsers(a, b='empty') {
//       const keyword = `${a}`; // This is the keyword of the item.
      
//       if (arguments.length == 1){        // The user try to make a search (only 1 argument)
//          let position = -1;              // It is a flag to indicate that the search has found the item in previous searches
//          let index = 0;                  // Indicate the index of the array that contain the item. 
//          while(index < searches.length) {           // To make the search in the array     
//                if(searches[index][0] == keyword){
//                  position = index;                  // The index is saved in the position variable
//                  console.log("This is the information from previous searches");  // Only to indicate a previous search has been made
//                  console.log(searches[index][1])
//                  } 
//                 index += 1;
//              }
            
//          if (position < 0){               // Position variable is a flag that indicates if the search has found the item
//             if (equipment_users.hasOwnProperty(keyword)){
//                 console.log("Item Information Previously Stored");
//                 console.log(equipment_users[keyword]);      
//                 searches.push([keyword, equipment_users[keyword]]);   // Introduces a new search in the array
//                 return equipment_users[keyword];
//              }
//                 else {
//                     console.log('The kwyword is not found');   // If the keyword dosn't exist
//             }
//          }
                
//       }

//       if (arguments.length > 1){                               // The user try to insert a new keyword (more than 1 argument)
//             if (equipment_users.hasOwnProperty(keyword)) {     // This is the search for the keyword in the object properties
//                 console.log("Item Information Previously Stored");  // Indicate that the keyword is already stored
//                 console.log(equipment_users[keyword]);         // Print the value of the property
//                 return equipment_users[keyword];
//              } else{                                           // The keyword is new (is not previously stored) 
//                 console.log(`Keyword: ${a}, stored with information: ${b}`);   // Print the values to be stored
//                 equipment_users[keyword] = b;                  // Store the new property an value
//                 return equipment_users[keyword];
//              }       
//         }
//     };
//   }
  
//   const equipment = building();                           // Creates a new function for equipments
//   const users = building();                               // Creates a new function for users

  
//   const resultado1 = equipment('computer1', 'floor1');  // This line registers a new equipment/item (computer1) and its location (floor1)
//   const resultado2 = equipment('computer2', 'floor1');  // This line registers a new equipment/item (computer2) and its location (floor1)
//   const resultado3 = equipment('fun1', 'floor2');       // This line registers a new equipment/item (fun1) and its location (floor2)
//   const resultado4 = equipment('fun2', 'floor2');       // This line registers a new equipment/item (fun2) and its location (floor2)

//   const resultado5 = users('Ernest', 'floor1');  // This line registers a new user (Ernest) and its location (floor1)
//   const resultado6 = users('Louis', 'floor2');   // This line registers a new user (Louis) and its location (floor2)
//   const resultado7 = users('Fabian', 'floor3');  // This line registers a new user (Fabian) and its location (floor3)
//   const resultado8 = users('Jonh', 'floor4');    // This line registers a new user (Jonh) and its location (floor4)
//   const resultado9 = users('Jonh');              // This line consults the information of a user (Jonh)
//   const resultado10 = users('Fabian');           // This line consults the information of a user (Fabian)
//   const resultado11 = users('Jonh');             // This line consults the information of a user (Jonh) (from previous consults)
//   const resultado12 = users('Fabian');           // This line consults the information of a user (Fabian) (from previous consults)
//   const resultado13 = users('Fabi');             // This line consults the information of a user not registered previously             
//   const resultado14 = users('Jonh', 'floor5');   // This line try to register a user (Jonh) that is registered previously

// // * When the function user or equipment is used with 2 arguments, indicates that is for registering a new item/user (first argument is 
// //   the item/user and the second argument is the description)

// // * When the function user or equipment is used with 1 arguments, indicates thet is a consult


