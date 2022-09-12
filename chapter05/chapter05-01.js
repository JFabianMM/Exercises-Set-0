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


var bank = (function () { 
    let accounts_clients = {};
    return {  
        deposit: function (account, deposit) {
            try { 
                if(deposit < 0) throw "E1";             // This error code means negative deposits are not allowed 
                if(arguments.length>2) throw "E2";      // This error code means to many arguments
                if(arguments.length<2) throw "E3";      // This error code means to few arguments
                const keyword = `${account}`; 
                if (accounts_clients.hasOwnProperty(keyword)) {  // The account already exist in the object properties
                    let balance= accounts_clients[keyword];      // Gets the balance of the account
                    balance=balance+deposit;                 // Then, get the new balance 
                    accounts_clients[keyword]=balance;  
                }else{                                            // The account is new (Then is created)
                    accounts_clients[keyword] = deposit;                  // Store the new account and balance
                }
                return deposit;
              }
              catch(err) {
                    return err;
              }     
        },
        retrival: function (account, retrival) { 
            const keyword = `${account}`;
            try { 
                if(retrival < 0) throw "E4";             // This error code means negative retrivals are not allowed 
                if(arguments.length>2) throw "E2";       // This error code means to many arguments
                if(arguments.length<2) throw "E3";       // This error code means to few arguments
                if (!accounts_clients.hasOwnProperty(keyword)) throw "E5";  // This error means the account doesnt exist
                let balance= accounts_clients[keyword];         // Gets the balance of the account
                if (balance-retrival<0) throw "E6";  // This error code means Insufficient funds
                balance=balance-retrival;                // If the funds are ok then get the new balance
                accounts_clients[keyword]=balance;              // Assign the new balance to the account
                return retrival;
            }catch(err) {
                  return err;
            }     
        },
        consult: function (account) {
            const keyword = `${account}`; 
            try {  
                if(arguments.length>1) throw "E2";       // This error code means to many arguments
                if(arguments.length<1) throw "E3";       // This error code means to few arguments
                if (!accounts_clients.hasOwnProperty(keyword)) throw "E5";  // This error means the account doesnt exist
                return accounts_clients[keyword];
            }catch(err) {
                return err;
            }    
        }
    }; 
})();

var bank1 = bank;
console.log(bank1.deposit(120,100)); 
console.log(bank1.consult(122));
console.log(bank1.retrival(120,-199));
console.log(bank1.retrival(120,19));
console.log(bank1.consult(120));

// HERE the way the bank1 entity works. 
// To make a deposit in a bank account, the format is:   
//     bank.deposit(120,100);  where the first argument is the account number (120) and
//                             the second argument is the money ammount (100 dlls) to be deposited.  
// To make a retrieve in a bank account, the format is:
//     bank.retrive(120, 200);  where the first argument is the account number (120) and
//                              the second argument is the money ammount (200 dlls) to be retrieved. 
//                              Note: The negative values are not allowed.
// If the bank account do not exist, with a deposit is created.
// To make aconsult we utilize the following method:
//     bank.consult(120);       ehere the argument is the bank account

   //************************************************************************************** */


   var client = (function () { 
    let accounts_client = {};
    accounts_client[0] = 0;      // The account number 0 is the "ownPocket" account born with a balance = 0.
    accounts_client[1] = 0;      // The account number 1 is the "personal" account born with a balance = 0.
    return {  
        deposit: function (account, deposit) {
            try { 
                if(deposit < 0) throw "E1";             // This error code means negative deposits are not allowed 
                if(arguments.length>2) throw "E2";      // This error code means to many arguments
                if(arguments.length<2) throw "E3";      // This error code means to few arguments
                const keyword = `${account}`; 
                if (account==0){
                    accounts_client[keyword] = deposit;
                }
                if (account>0){
                    let balance= accounts_client[0];
                    if (balance-deposit<0) throw "E7";     // This error code means Insufficient funds in the ownPocket account
                    accounts_client[0]=balance-deposit;         // Set the new balance to the own pocket account
                    if (accounts_client.hasOwnProperty(keyword)) {  // The account already exist in the object properties
                        let balance2= accounts_client[keyword];      // Gets the balance of the account
                        balance2=balance2+deposit;                 // Then, get the new balance 
                        accounts_client[keyword]=balance2;         // Set the new balance 
                    }else{                                            // The account is new (Then is created)
                        accounts_client[keyword] = deposit;                  // Store the new account and balance
                    }
                }
                return deposit;
              }
              catch(err) {
                    return err;
              }     
        },
        retrival: function (account, retrival) { 
            const keyword = `${account}`;
            try { 
                if(retrival < 0) throw "E4";             // This error code means negative retrivals are not allowed 
                if(arguments.length>2) throw "E2";       // This error code means to many arguments
                if(arguments.length<2) throw "E3";       // This error code means to few arguments
                if(account!=1)throw "E8";                // This error code means Retrival is only allowed fo personal account.
                let balance= accounts_client[keyword];         // Gets the balance of the account
                if (balance-retrival<0) throw "E6";      // This error code means Insufficient funds
                accounts_client[keyword]=balance-retrival;              // Assign the new balance to the account
                accounts_client[0]=accounts_client[0]+retrival;   // Add the retrival to the ownPocket account
                return retrival;
            }catch(err) {
                  return err;
            }     
        },
        consult: function (account) {
            const keyword = `${account}`; 
            try {  
                if(arguments.length>1) throw "E2";       // This error code means to many arguments
                if(arguments.length<1) throw "E3";       // This error code means to few arguments
                if(account>1)throw "E9";                 // This error code means consult only allowed for personal and ownPocket accouunt
                return accounts_client[keyword];
            }catch(err) {
                return err;
            }    
        }
    }; 
})();

const client1 = client;
console.log(client1.consult(1));
console.log(client1.deposit(0, 100));
console.log(client1.consult(0));
console.log(client1.deposit(1, 120));
console.log(client1.consult(0));
             
   
// HERE the way the client1 entity works
// When a new client is created, are created with two default accounts called "ownPocket" (account 0) and
// a "personalAccount" (account 1) with balance "0".
// To make a deposit in a client account, the format is as follows: 
//     client1.deposit(0, 1000);  where the first argument is the account number/name and
//                                  the second argument is the money ammount (1000 dlls) to be deposited.  
// To make a retrieve, the format is:
//     client.retrive(1, 200);  where the first argument is the account number/name and
//                               the second argument is the money ammount (200 dlls) to be retrieved. 
//                              Note: Only positive values for retrive
// The deposit to any account comes from the ownPocket account.
// The retrieve of a personalAccount is deposited to the ownPocket account.
// The retrieve is allowed only for the personal account and the retrived ammound is added to the ownPocket account (account 0).
// To make a consult of the account balance, the format is:
//     client1.consult(1);  where the argument is only the account number.


