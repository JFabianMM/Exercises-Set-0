// **************************** //
// Exercise Chapter 05 - Exercise 01 
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


function bank() {
    let accounts_clients = {};       // This object is used to save the account number and balance (each item as a property-value pair)   
    return function acountsAndClients(a, b='empty') {
    const keyword = `${a}`;            // This is the keyword of the item (account number).
      
    if (arguments.length == 1){        // The user try to make a consult of the account number balance (only 1 argument)          
        if (accounts_clients.hasOwnProperty(keyword)){       // Find if the account number exist.
            let balance=accounts_clients[keyword];           // Get the balance of the account
            console.log(`Bank Account: #${a}, Balance: ${balance} Dlls`);   // Show the values
            return accounts_clients[keyword];
        }else {
            console.log('The bank account do not exist');      // If the keyword dosn't exist.
        }   
    }
    if (arguments.length > 1){                                  // The user try to make a deposit or retrival (more than 1 argument)
            if (accounts_clients.hasOwnProperty(keyword)) {     // The account already exist in the object properties
                let deposit= arguments[1];                      // Gets the deposit amount
                let balance= accounts_clients[keyword];         // Gets the balance of the account
                if (deposit>=0){                                // If the operation is a deposit
                    balance=balance+deposit;                    // Then, get the new balance 
                } 
                if (deposit<0){                                 // If the operation is a retrival
                    if (balance+deposit>=0){                    // Check the funds 
                        balance=balance+deposit;                // If the funds are ok then get the new balance
                    }else{                                      // Insufficient funds
                        console.log("Insufficient funds. Retrieve can't be achieved");
                        let change=0;                           
                        return change;                          // Returns the change in the amount balance
                    }
                } 
                accounts_clients[keyword]=balance;              // Assign the new balance to the account
                console.log(`Bank Account: #${a}, Balance: ${balance} Dlls`);   // Show the balance of the account
                let change = deposit;                            
                return change;                                  // Returns the change in the amount balance
             } else{                                            // The account is new (Then is created)
                if (b>=0){                                      // Review that the operation is a deposit
                console.log(`Bank Account: #${a}, Balance: ${b} Dlls`);   // Show the balance of the account
                accounts_clients[keyword] = b;                  // Store the new account and balance
                let change = b;
                return change;                                  // Returns the change in the amount balance
                }else{                                          // Retrival is not allowed for new accounts
                    console.log("Insufficient funds. Retrieve can't be achieved")
                } 
             }       
        }
    }
  }

   //************************************************************************************** */
  function client() {
    let accounts_clients = {};       // This object is used to save the account number/name and balance (each item as a property-value pair)   
    const keyword = 'ownPocket';     // Each client born with a ownPocket account.
    accounts_clients[keyword] = 0;   // The ownPocket account born with a balance = 0.
    bank1('personalAccount0', 0)     // Each client born with a personalAccount0 in the bank. For nore than 1 client its important 
                                     // to review the personal account name/numbers is not already created in the bank.

    return function acountsAndClients(a, b='empty') {
    const keyword = `${a}`;         // This is the keyword of the item (account number).
    //--------------------------------------------------------------------------
    if (arguments.length == 1){        // The user try to use a consult of an account (only 1 argument)          
        if (accounts_clients.hasOwnProperty(keyword)){            // Find if the account number exist. (only for ownPocket accout)
            let balance=accounts_clients[keyword];                // Get the balance of the account
            console.log(`Account: #${a}, Balance: ${balance} Dlls`);   // Show the balance of the account
            return accounts_clients[keyword];      
        }else {
            console.log('The account do not exist');             // If the keyword dosn't exist
        }   
    }
    //--------------------------------------------------------------------------
    if (arguments.length > 1){                                 // The user try to make a deposit or retrival (more than 1 argument)
            if (accounts_clients.hasOwnProperty(keyword)) {    // This is the search for the keyword in the object properties
                let deposit= arguments[1];                     // Get the deposit amount
                let balance= accounts_clients[keyword];        // Get the balance of the account
                if (deposit>0){                                // If the operation is a deposit
                    balance=balance+deposit;                   // Get the new balance
                } 
                if (deposit<0){                               // If the operation is a retrival
                    if (balance+deposit>=0){                  // Review the funds
                        balance=balance+deposit;              // Get the new balance
                    }else{             
                        console.log("Insufficient funds. Retrieve can't be achieved");  
                    }
                } 
                accounts_clients[keyword]=balance;            // Assugn the new balance
                console.log(`Bank Account: #${a}, Balance: ${balance} Dlls`);   // Show the balance
                return accounts_clients[keyword];
             } else{                                          // Is not the ownPocket account
                let deposit= b;                               // Get the deposit amount
                let balance= accounts_clients['ownPocket'];   // Get the balance of the ownPocket account
                if (deposit>=0){                               // If the operation is a deposit
                    if (balance-deposit>=0){                  // Review the funds of the ownPocket account
                        let result= bank1(a, b);              // Makes the deposit
                        accounts_clients['ownPocket']=balance-result;   // Assign the new balance of the ownPocket account      
                    }else{
                        console.log("Insufficient funds in Own Pocket account"); 
                    }  
                }else{                                       // If the operation is a retrival
                    if (keyword=='personalAccount0'){        // Allowed only for the personal account        
                       let result= bank1(a, b);              // Makes the retrival
                       accounts_clients['ownPocket']=balance-result;   //Assign the new balance to the ownPocket account
                    }
               }
             }       
        }
    }
  }



// HERE the way the bank1 entity works. 
// To make a deposit in a bank account, the format is:   
//     bank1(129, 900);  where the first argument is the account number (129) and
//                       the second argument is the money ammount (900 dlls) to be deposited.  
// To make a retrieve in a bank account, the format is:
//     bank1(129, -200);  where the first argument is the account number (129) and
//                       the second argument is the money ammount (200 dlls) to be retrieved. 
//                        so the amount is negative value to be a retrieve.
// If the bank account do not exist, with a deposit is created.
// The bank can create several accounts
// To make a consult of the account balance, the format is:
//     bank1(129);  where the argument is only the account number.


// Some examples are:
const bank1 = bank(); 
bank1(129, 1000);       // This line registers a new equipment/item (computer1) and its location (floor1)
bank1(129, 200);                 // This line registers a new equipment/item (computer2) and its location (floor1)
bank1(129, -1000); 
bank1(129, -300); 
bank1(129); 

bank1(130, 1000);       // This line registers a new equipment/item (computer1) and its location (floor1)
bank1(130, 200);                 // This line registers a new equipment/item (computer2) and its location (floor1)
bank1(130, -1000); 
bank1(130, -200); 
bank1(129);
bank1(140, -200); 


   
// HERE the way the client1 entity works
// When a new client is created, are created with two default accounts called "ownPocket" and a bank account "personalAccount" 
// with balance "0".
// To make a deposit in a client account, the format is as follows: 
//     client1('ownPocket', 1000);  where the first argument is the account number/name and
//                                  the second argument is the money ammount (1000 dlls) to be deposited.  
// To make a retrieve, the format is:
//     bank1('ownPocket', -200);  where the first argument is the account number/name and
//                               the second argument is the money ammount (200 dlls) to be retrieved. 
//                               the amount is negative for a retrieve.
// The deposit to any account comes from the ownPocket account.
// The retrieve of a personalAccount is deposited to the ownPocket account.
// The retrieve is allowed only for the personal account and the ownPocket account.
// To make a consult of the account balance, the format is:
//     client1('ownPocket');  where the argument is only the account number.

const client1 = client();
client1('ownPocket', 1000);
client1('personalAccount0', 100);
client1('ownPocket');
client1('personalAccount0', -10);
client1('ownPocket');
client1(129, 1000);
client1('ownPocket');
client1(129, 100);
client1('ownPocket');
